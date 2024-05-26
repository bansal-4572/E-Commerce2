
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shops/>}/>
        <Route path='/mens' element={<shopCategory category="mens"/>}/>
        <Route path='/womens' element={<shopsCategory category="womens"/>}/>
        <Route path='/kids' element={<shopsCategoty category="kids"/>}/>
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
