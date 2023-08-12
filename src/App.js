
import {Routes,Route} from 'react-router-dom'

import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Department } from './pages/Department/Department';
import { ProductListing } from './pages/ProductListing/ProductsListing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/products' element={<ProductListing/>} />
      </Routes>
    </div>
  );
}

export default App;
