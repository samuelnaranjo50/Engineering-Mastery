
import './App.css';
import { Link } from 'react-router-dom';



function App() {
  return (
    <>

    <h1>This is the home Page</h1>
  
      <nav>
        <ul>
          <li><Link to="/" className="nav_link">
          Homepage
        </Link></li>
        <li><Link to="/images" className="nav_link">Images</Link></li>
        <li><Link to="/contact-us" className="nav_link"> Contact us </Link>
    
      </li>
        </ul>
      
      </nav>


    
    

    
    </>

    
  );
}

export default App;
