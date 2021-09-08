import React, { useEffect }  from "react";
import { useState } from "react";
import Blogs from "./blogs";



const Home = () => {

   
    const [list , setlist] = useState(null);
    const [isPending, setIspending] = useState(true)
    const [error , setError] = useState(null)

   

    useEffect(() => {
      setTimeout(()=>{
        fetch('http://localhost:5000/content')
        .then(res => {
          if(!res.ok){
            throw Error("could not fetch the data")
          }
          return res.json();
        })
        .then(data => {
          setlist(data);
          setIspending(false);
          setError(null)
        })
        .catch(err =>{
          setIspending(false)
          setError(err.message)
        })
      },1000)
      
      }, [])
    

return (
    <>
        <div className="content">
        {error && <div>{error}</div>}
        {isPending && <div>Loding...</div>}
        {list && list.map(blog=>
            <Blogs 
            key = {blog.id}
            id ={blog.id}
            title={blog.title}
            author ={blog.author}
            description ={blog.description}
            />
        )}
        </div>
    </>
)

}
 
export default Home;







