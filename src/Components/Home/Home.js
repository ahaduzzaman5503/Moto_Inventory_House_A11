import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slider1 from "../../Images/budget-slider-1.jpg";
import slider2 from "../../Images/budget-slider-2.jpg";
import slider3 from "../../Images/budget-slider-3.jpg";
import car1 from "../../Images/car-1.png";
import CarShow from '../CarShow/CarShow';
import Inventory from '../Inventory/Inventory';
import "./Home.css"

const Home = (props) => {

  const [cars, setCars] = useState([]);
  const [inventory, setInventory] = useState([]);

  const navigate = useNavigate();

  useEffect( () => {
    fetch('https://blooming-beyond-07749.herokuapp.com/cars')
    .then (res => res.json())
    .then(data => setCars(data));
  }, [])

  fetch('https://blooming-beyond-07749.herokuapp.com/cars', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
.then(res=> res.json())
.then(data => {
})

    const singleInventoryHandle = (car) => {
     const singleCar = [...inventory, car]
      navigate(`/inventory/${car.id}`);
      setInventory(singleCar)
  }

    return (
        <div className='main-home'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider1} className="d-block w-100" alt="slider1"/>
                </div>
                <div className="carousel-item">
                  <img src={slider2} className="d-block w-100" alt="slider2"/>
                </div>
                <div className="carousel-item">
                  <img src={slider3} className="d-block w-100" alt="slider3"/>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>

        <div className='main-car-section'>
          <div className='car-icon container'>
          <i className="fas fa-car"></i> <span>Select Your Car</span>
          </div>
        <div className='find-your-car container'>
          <div className='select-body' >
          <select className="form-select" aria-label="Default select example">
            <option >Select Body</option>
            <option >Compect</option>
            <option >Coupe</option>
          </select>
          </div>

          <div className='select-make' >
          <select className="form-select" aria-label="Default select example">
            <option >Select Make</option>
            <option >Acura</option>
            <option>BMW</option>
          </select>
          </div> 

          <div className='select-milleage' >
          <select className="form-select" aria-label="Default select example">
            <option >Select Milleage</option>
            <option>10000</option>
            <option>20000</option>
          </select>
          </div>

          <div className='select-brand' >
          <select className="form-select" aria-label="Default select example">
            <option >Select Brand</option>
            <option >BMW</option>
            <option>Audi</option>
          </select>
          </div>

          <button className='search-car px-4 bg-dark' >Search Car</button>
        </div>
        </div>

        <div className='car-item-section container'>
                <h1 className='container w-50 mx-auto' >Moto Inventory House</h1>

                <div className='carShow container'>
                  {
                    cars.map( car => <CarShow
                    key={car.id}
                    car={car}
                    singleInventoryHandle={singleInventoryHandle}
                    ></CarShow>)
                  }
                </div>
        </div>

        <div className='automotive-marketplace container'>

<div className='left-image'>
  <img src={car1} className="li" alt=""/>
</div>
<div className='right-text'>
  <h1>World largest automotive marketplace.</h1>
    <div className='four-section'> 
    <div className='mb-3' >
       <i className="fas fa-car fa-2x  "></i> <h2 className='d-inline'>Best Collection</h2>
    <p>Best car Collection for you. You can chooce your best car. Here has diffirent type of car brand. </p>
    </div>

    <div className='mb-3' >
    <i className="fa-solid fa-car-on fa-2x"></i> <h2 className='d-inline'>Best Pricing</h2>
    <p>You can chooce any best rating car as your like. Here have beautifull car for you</p>
    </div>

    <div className='mb-3'>
    <i className="fa-solid fa-car-on fa-2x"></i> <h2 className='d-inline'>Famous Brands</h2>
      <p>Famous Brands car also have here. You can chooce any Famous car. Whice you like.</p>
    </div>

    <div className='mb-3'>
    <i className="fas fa-car fa-2x"></i> <h2 className='d-inline'>Best Ratings</h2>
    <p>All car has best rating. Those ratting given our clent. All are satisfied on our car.</p>
    </div>

    </div>
</div>

</div>
  </div>
    );
};

export default Home;