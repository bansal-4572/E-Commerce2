import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<shopCategory category="mens"/>}/>
        <Route path='/womens' element={<shopCategory category="womens"/>}/>
        <Route path='/kids' element={<shopCategoty category="kids"/>}/>
        <Route path="/product" element={<product/>}>
        <Route path=":productId" element={<product/>}/>
     </Route> 
     <Route path="/cart" element={<cart/>}/>
     <Route path="/login" element={<loginsignup/>} />
      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
