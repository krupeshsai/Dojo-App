
import NavBar from "./navBar";
import Home from "./home";


const App = () => {
  return ( <>
    <div className="App">
      <NavBar/>
    </div>
    <div className="content">
      <Home/>
    </div>
    </>
   );
}
 
export default App;