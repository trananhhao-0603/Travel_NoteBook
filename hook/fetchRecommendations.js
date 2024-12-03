import { useState, useEffect} from 'react'
import axios from 'axios'
import ip from './ip_address'
const fetchRecommendations = (places) => {
    const [recommendations, setRecommendations] = useState([])
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
            if (places === 1) {
                const response = await axios.get('http://'+ip+':5003/api/places?limit=all');
                const randomPlaces = getRandomElements(response.data.places, 5);
                setRecommendations(randomPlaces);
            } else {
                const response = await axios.get('http://'+ip+':5003/api/places?limit=all');
                const randomPlaces = getRandomElements(response.data.places, 10);
                setRecommendations(randomPlaces);
            }
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

    return {recommendations, isLoading, error, refetch}
}

export default fetchRecommendations