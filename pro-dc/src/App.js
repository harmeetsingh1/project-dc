
import './App.css';
import Topbar from './Topbar';
import Cards from './Cards';
import Details from './Details';
import {BrowserRouter as Router,Route,
  Navigate,Routes} from 'react-router-dom';
  import Oc from './Oc';



function App() {
  return (
  <Router>
   
  <Topbar />
  <Routes>
 
 
  {/* <Cards /> */}
  <Route path="/" element={<Cards/>}></Route>
  <Route path="/details" element={<Details/>}></Route>
  <Route path="/" element={<Details/>}></Route>
  <Route path="/details/oc" element={<Oc/>}></Route>
  {/* <Details/> */}
  </Routes>
  </Router>
  );
}

export default App;
