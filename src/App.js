import React, { useState } from 'react';
import './App.css';
import AllProduct from './components/AllProduct';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Optionmenu from './components/Optionmenu';
import Optionpage from './components/Optionpage';
import Productcard from './components/Productcard';
import Searchhome from './components/Searchhome';
import Sortby from './components/Sortby';


function App() {

  const [mapview,setmapview] = useState(false)

  
  return (
    <div className="App">
     <Header/>
     {/* <Menubar/> */}

     {/* <Optionmenu/> */}

     <Optionpage setmapview={setmapview}/>

     <Sortby/>

     <Searchhome mapview={mapview}/>

     

     {/* <AllProduct/> */}

     {/* <Productcard/> */}
    </div>
  );
}

export default App;
