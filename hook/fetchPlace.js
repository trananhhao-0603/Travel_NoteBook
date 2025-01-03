import { useState, useEffect} from 'react'
import axios from 'axios'
import ip from './ip_address'

const fetchPlace = (id) => {
    const [place, setPlace] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [coordinates, setCoordinates] = useState()
    const [error, setError] = useState(null)


    const fetchData = async() => {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://${ip}:5003/api/places/${id}`)

            setPlace(response.data.place);
            const data = response.data.place
            const coordinate = {
                id: data._id,
                title: data.title,
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
            setCoordinates(coordinate)
                
            
            setIsLoading(false)
        } catch (error) {
            setError(error)            
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {place,coordinates, isLoading, error, refetch}
}

export default fetchPlace