const Blogs = (props) => {

const deleteBlog = () =>{
   props.onRemove(props.id)
}

    return ( <>
         
          <div className="blog-list"> 
              <h1>{props.title}</h1>
              <div className="blog-preview">
              <h5>Written By {props.author}</h5>
              <p>{props.description}</p>
              <p>{props.id}</p>
              <br/>
              <button type="button" onClick={deleteBlog}>
            Remove
          </button>
          </div>
          </div>
    </> );
}
 
export default Blogs;