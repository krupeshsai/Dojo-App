const Blogs = (props) => {


    return ( <>
         
          <div className="blog-list"> 
              <h1>{props.title}</h1>
              <div className="blog-preview">
              <h5>Written By {props.author}</h5>
              <p>{props.description}</p>
              <p>{props.id}</p>
              <br/>
              
        
          </div>
          </div>
    </> );
}
 
export default Blogs;