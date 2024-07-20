import React from "react";
import { Route, Routes } from 'react-router-dom';
import './bootstrap.css'
 import './style.css'
import Main from "./Components/Main/Main";
import Ipad from "./Components/Routes/Ipad";
import Cart from "./Components/Routes/Cart";
import Iphone from "./Components/Routes/Iphone";
import Watch from "./Components/Routes/Watch";
import Mac from "./Components/Routes/Mac";
import Tv from "./Components/Routes/Tv";
import Music from "./Components/Routes/Music";
import Search from "./Components/Routes/Search";
import Support from "./Components/Routes/Support";
import ErrorPage from "./Components/Routes/ErrorPage";
import SharedPage from "./Components/Routes/SharedPage";
import SharedVideo from "./Components/Routes/SharedVideo";
import ProductPage from "./Components/Routes/ProductPage";

/*

</Route>
 */
function App() {
  return (
    < >
      
      <Routes>
        <Route path="/" element = {<SharedPage/>}>
        <Route path="/" element = {<SharedVideo/>} >  
           
        <Route path="/" element = {<Main/>}/>
      <Route path='mac' element = {<Mac/>}/>
      <Route path='iphone' element = {<Iphone/>}/>
      </Route>
      <Route path='iphone/:productID' element = {<ProductPage/>}/>
      
      <Route path='ipad' element = {<Ipad/>}/>
      
      <Route path='watch' element = {<Watch/>}/>
      <Route path='tv' element = {<Tv/>}/>
      <Route path='music' element = {<Music/>}/>
      <Route path='support' element = {<Support/>}/>
      <Route path='search' element = {<Search/>}/>
      <Route path='cart' element = {<Cart/>}/>
      <Route path='*' element = {<ErrorPage/>} />
      </Route>
      </Routes>
      
      

     
    </>
  );
}

export default App;
