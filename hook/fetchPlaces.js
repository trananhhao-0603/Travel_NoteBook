import { useState, useEffect} from 'react'
import axios from 'axios'
import ip from './ip_address'

const fetchPlaces = () => {
    const [place, setPlaces] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [placeCoordinates, setCoordinates] = useState([])
    const [error, setError] = useState(null)


    const fetchData = async() => {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://${ip}:5003/api/places`)

            setPlaces(response.data.places);
            const data = response.data.places;
            if (Array.isArray(data) && data.length > 0) {
                const coords = data.map((place) => ({
                    id: place._id,
                    title: place.title,
                    latitude: place.latitude,
                    longitude: place.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }));
                setCoordinates(coords);
            } else {
              setPlaces([]);
              setCoordinates([null]);
            }          
                
            
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
    

    return {place,placeCoordinates, isLoading, error, refetch}
}

export default fetchPlaces