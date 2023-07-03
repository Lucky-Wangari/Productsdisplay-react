import Login from './login';
import Navbar from './navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from './Products'
import ProductsDetails from './productdetails';

function App() {
  return (
    <div >
      <Navbar/>
<BrowserRouter>

<Routes>
  <Route path='/login' element ={<Login/>}></Route>
  <Route path='/product/:productId' element ={<ProductsDetails/>}/>
  <Route path='productdetails' element={<ProductsDetails/>}/>
  <Route path='/products' element ={<Products/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;








