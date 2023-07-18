import './App.css';
import 'bulma/css/bulma.css';

import NavBar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import Burger1 from './Components/burger1.js';




function App() {
  return (
   <>
   <div><NavBar /></div>
   <div><Burger1 /></div>
   <div><Section1 /></div>
   <div><Section2 /></div>
   <div><Section3 /></div>
   <div><Footer /></div>
   </>
 
  );
}

export default App;
