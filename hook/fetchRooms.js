import { useState, useEffect} from 'react'
import axios from 'axios'
import ip from './ip_address'

const fetchRooms = () => {
    const [rooms, setRooms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = async() => {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://${ip}:5003/api/rooms`)

            setRooms(response.data)
            
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

    return {rooms, isLoading, error, refetch}
}

export default fetchRooms