import React, { useEffect }  from "react";
import { useState } from "react";
// import BlogList from "./blogList";
import Blogs from "./blogs";



const Home = () => {

   
    const [list , setlist] = useState(null);
   

    const handleRemove = (id) => {
        const newList = list.filter((blog)=> blog.id !== id);
      setlist(newList);
       
    }

    useEffect(() => {
        fetch('http://localhost:5000/content')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setlist(data);
          })
      }, [])
    

return (
    <>
        <div className="content">
        
        {list && list.map(blog=>
            <Blogs 
            key = {blog.id}
            id ={blog.id}
            title={blog.title}
            author ={blog.author}
            description ={blog.description}
            onRemove={handleRemove}
            />
        )}
        </div>
    </>
)

}
 
export default Home;







// return ( <>
//     <div className="home">
//       {list.map(blog => (
//         <div className="blog-preview"
//          key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <h5>Written by {blog.author}</h5>
//           <br/>
//           <p>{ blog.description }</p>
//           <br/>
//           <button  onClick={()=> handleRemove(blog.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//     </> );


//   {/* { list && list.map(blog=> 
//             <Blogs
//             key = {blog.id}
//             id ={blog.id}
//             title={blog.title}
//             author ={blog.author}
//             description ={blog.description}
//             onRemove={handleRemove}
//             />
//             )} 
//                 */}