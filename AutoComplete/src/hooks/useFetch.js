import React, { useCallback, useEffect, useState } from 'react'
import  debounce  from 'lodash/debounce'
const useFetch = (query,transformData,promise,debounceWait) => {
  
    const [data,setData]=useState(null)
    const [error,setError]=useState(null)
    

    const fetchData=useCallback(
       debounce( async(query,transformData,promise,signal)=>{
            try {
                const response=await promise(query,signal)
                if(!response.ok)
                 throw new Error(response.statusText)
    
                 const data=await response.json()
                 console.log("fectg",data)
                 setData(transformData(data))
                
            } catch (error) {
               if(!signal.aborted) setError(error)
                
            }
        },debounceWait),[])

    useEffect(()=>{
        if(query.length<=0)
        {
            setData(null)
            setError(null)
            return;
        }
         const controller=new AbortController();
         const signal=controller.signal;
      fetchData(query,transformData,promise,signal)
      return ()=>{
        controller.abort();
      }

    },[query,transformData,fetchData])

    return [data,error]
 
}

export default useFetch