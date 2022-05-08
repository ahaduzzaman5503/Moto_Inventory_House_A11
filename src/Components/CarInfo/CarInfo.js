import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CarInfo.css";

const CarInfo = (singleInventoryHandle) => {
    const {carId} = useParams();
    const [car, setCar] = useState({});
    const [carInfoshow, setCarInfoshow] = useState({});


    useEffect(() => {
        const url = `https://blooming-beyond-07749.herokuapp.com/car/${carId}`;
        fetch(url) 
        .then(res => res.json())
        .then(data => setCar(data))
    }, [carId])

    const deliverHandle = (car) => {
        const singleDeliver = [ ...carInfoshow, car]
        setCarInfoshow(singleDeliver)
        console.log("Deliver Success!")
    }

    return (
        <div className='carInfoMain container'>
            <div className='carInfoShow container'>
                <img src={car.carImage} alt="" />
                <h2>{car.name}</h2>
                <h3>${car.price}</h3>
                <p>{car.description}</p>
                <h3>Suppliers:  {car.supplierName}</h3>
                <h3>Quantity:   {car.quantity}</h3>
                <button className='stock-btn' onClick={ ()=> deliverHandle(car)} > <i className="fa-solid fa-truck"></i> Deliverd </button>
            </div>



            <div className='carinfo'>
                <h1>Here will be Show Product Information</h1>
                
            <div className='carItem'>
                <div>
                    <img src={car.carImage} alt="" />
                </div>
                <div>
                    <h3>{car.name}</h3>
                    <h3> Quantity:   {car.quantity}</h3>
                </div>
                <div>
                    <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can fa-2xl"></i></button>
                </div>
            </div> 

                <div className='container addNewBtn'>
                    <button type="button" className="btn btn-primary w-50 "> <i className="fa-solid fa-circle-plus fa-xl"></i>  Add New Item </button>
                </div>

                <div className="input-group mb-5 container">
                    <input type="number" className="form-control" placeholder="Add Number of Product to Stock" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button type="button" className="btn btn-success input-group-text" id="basic-addon1"> <i className="fa-solid fa-circle-plus fa-xl"></i> Add Stock</button>
                </div>
           </div>
        </div>
    );
};

export default CarInfo;