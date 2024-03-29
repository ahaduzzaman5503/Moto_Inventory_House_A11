import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Inventory from "./Components/Inventory/Inventory";
import CarInfo from './Components/CarInfo/CarInfo';
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import About from './Components/About/About';
import InventoryAuth from './Components/InventoryAuth/InventoryAuth';
import InventoryManage from './Components/InventoryManage/InventoryManage';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:_id' element={<InventoryAuth><CarInfo></CarInfo></InventoryAuth>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/regester' element={<Register></Register>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/manageinventory' element={<InventoryManage></InventoryManage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
