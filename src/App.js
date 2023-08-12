
import {Routes,Route} from 'react-router-dom'

import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Department } from './pages/Department/Department';
import { ProductListing } from './pages/ProductListing/ProductsListing';
import { Form } from './pages/New Products/Form';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/products' element={<ProductListing/>} />
        <Route path='/new-product' element={<Form/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
