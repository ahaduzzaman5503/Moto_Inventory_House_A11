import React, {useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CarInfo.css";

const CarInfo = (singleInventoryHandle) => {
    const {_id} = useParams();
    const [car, setCar] = useState({});
    const [addStock, setAddStock] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${_id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [_id]);

    const deliverHandle = async (car) => {
        if(car.quantity){
            const quantity = car.quantity - 1;
            const newQuintity = {quantity}
            await fetch(
                `http://localhost:5000/inventory/${_id}`,
                {
                  method: "PUT",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(newQuintity),
                }
              )
                .then((res) => res.json())
              /* update stoke in ui */
              fetch(`http://localhost:5000/inventory/${_id}`)
              .then((res) => res.json())
              .then((data) => setCar(data))
        }
    }

    //Add Stock Quintity
    const handleStockQ = async (e) => {
        
        console.log(addStock)
        const quantity = parseInt(car.quantity) + parseInt(addStock);
            const newQuintity = {quantity}
            await fetch(
                `http://localhost:5000/inventory/${_id}`,
                {
                  method: "PUT",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(newQuintity),
                }
              )
                .then((res) => res.json())
              /* update stoke in ui */
              fetch(`http://localhost:5000/inventory/${_id}`)
              .then((res) => res.json())
              .then((data) => setCar(data))  
              ref.current.value = '';
    }

    return (
        <div className='carInfoMain container'>
            <div className='carInfoShow container'>
                <div className='d-flex bd-highlight mb-3'>
                    <div className='p-2 bd-highlight'>
                        <img className='fw-bold mb-2' src={car.carImage} alt="" />
                    </div>
                    <div className='p-2 bd-highlight'>
                        <h2 className='fw-bold mb-1'>{car.name}</h2>
                        <h3 className='fw-bold mb-1'>${car.price}</h3>
                        <h3 className='fw-bold mb-1'>Suppliers:  {car.supplierName}</h3>
                        <h3 className='fw-bold mb-1'>Quantity: {car.quantity}</h3>
                    </div>
                </div>
                <p>{car.description}</p> <br></br>
                <button className='stock-btn' onClick={ ()=> deliverHandle(car)} > <i className="fa-solid fa-truck"></i> Deliverd </button>
            </div>



            <div className='carinfo'>
            <div className='carItem'>
                <div>
                    <img src={car.carImage} alt="" />
                </div>
                <div>
                    <h3 className='fw-bold mb-1'>{car.name}</h3>
                    <h3 className='fw-bold mb-1'> Quantity: {car.quantity}</h3>
                </div>
                <div>
                   <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can fa-2xl"></i></button>
                </div>
            </div> 

                <div className='container addNewBtn'>
                    <button type="button" className="btn btn-primary w-50 "> <i className="fa-solid fa-circle-plus fa-xl"></i>  Add New Item </button>
                </div>

                <div className="input-group mb-5 container">
                    <input onBlur={(e) => setAddStock(e.target.value)}
                     type="number" className="form-control" 
                     ref={ref}
                    placeholder="Add Number of Product to Stock" 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                    
                    <button  onClick={handleStockQ} 
                     type="button" className="btn btn-success input-group-text" 
                    id="basic-addon1"> <i className="fa-solid fa-circle-plus fa-xl">
                        </i> Add Stock</button>
                </div>
           </div>
        </div>
    );
};

export default CarInfo;