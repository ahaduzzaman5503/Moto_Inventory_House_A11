import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetails from './Components/CarDetails/CarDetails';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import StockData from './Components/StockData/StockData';
import StockPD from './Components/StockPD/StockPD';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/cardetails/:carId' element={<CarDetails></CarDetails>}></Route>
        <Route path='/stockpd' element={<StockPD></StockPD>} ></Route>
        <Route path='/stockdata' element={<StockData></StockData>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
