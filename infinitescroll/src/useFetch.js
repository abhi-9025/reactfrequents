import { useEffect, useState } from "react";

const useFetch = (query,page) => {

  const [data,setData]=useState(null)
  const [error,setError]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
    const fetchData=async(query,page)=>{
        try {
            const response=await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`);
            const data=await response.json();
            setData(data.docs)
            console.log(data)
        } catch (error) {
             setError(error)
            console.log("error",error);
        }finally{
            setIsLoading(false)
            setError(false)
        }
    }

    useEffect(()=>{
         setIsLoading(true)
         setError(false)
        fetchData(query,page)
    },[query,page])

    return [data,error,isLoading]
}

export default useFetch