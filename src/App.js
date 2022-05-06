import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Inventory from "./Components/Inventory/Inventory";
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:invenId' element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
