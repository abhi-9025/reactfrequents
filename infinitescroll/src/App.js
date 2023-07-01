import { useCallback, useRef, useState } from "react";
import useFetch from "./useFetch";
// TODO needs querying data and optimization
function App() {
  const [query,setQuery]=useState('')
  const [page,setPage]=useState(1)

  
 const[data,error,isLoading]= useFetch(query,page)
  const handleChange=(event)=>{
      setQuery(event.target.value)
  }
const observer=useRef()
const lastBookRef=useCallback(node=>{
  if(isLoading) return;
  if(observer.current) observer.current.disconnect()
  observer.current=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting)
    {
     setPage(prev=>prev+1)
    }
  })
  if(node) observer.current.observe(node)
},[isLoading])


  return (
    <div className="App">
       <input type="text" value={query} onChange={handleChange} />

       {/* {error&&<div>error:{error}</div>} */}
       {data&&data.length>0&&
        data.map((item,index)=>{
          if(data.length===index+1)
            return  <div ref={lastBookRef} key={index}>{item.title}</div>
            else{
          return(
            <div key={index}>{item.title}</div>
          )
            }
        })
       }
              {isLoading&&<div>Loading...</div>}
              {error&&<div>error...</div>}
    </div>
  );
}

export default App;
