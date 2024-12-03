import { useState, useEffect} from 'react'
import axios from 'axios'
import ip from './ip_address'
const fetchHotels = () => {
    const [hotels, setHotels] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const shuffleArray = (array) => {
      return array
        .map((value) => ({ value, sort: Math.random() })) // Gắn số ngẫu nhiên vào mỗi phần tử
        .sort((a, b) => a.sort - b.sort) // Sắp xếp theo số ngẫu nhiên
        .map(({ value }) => value); // Trả lại mảng đã trộn
    };

    const getRandomElements = (array, count) => {
        const shuffled = shuffleArray(array);
        return shuffled.slice(0, count); // Lấy `count` phần tử đầu tiên sau khi trộn
    };


    const fetchData = async() => {
        setIsLoading(true)

        try {
                const response = await axios.get('http://'+ip+':5003/api/hotels');
                const randomPlaces = getRandomElements(response.data.hotels, 10);
                setHotels(randomPlaces);
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

    return {hotels, isLoading, error, refetch}
}

export default fetchHotels