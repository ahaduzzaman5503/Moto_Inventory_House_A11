import React, {useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
                        <h2 className='fw-bold mb-3'>Car Name:  {car.name}</h2>
                        <h3 className='fw-bold mb-3'> Car Price:  ${car.price}</h3>
                        <h3 className='fw-bold mb-3'>Suppliers:  {car.supplierName}</h3>
                        <h3 className='fw-bold mb-0'>Quantity: {car.quantity}</h3>
                    </div>
                </div>
                <p>{car.description}</p> <br></br>

                {/* add Stock Button */}

                <div className="input-group mb-4 ">
                    <input onBlur={(e) => setAddStock(e.target.value)}
                     type="number" className="form-control" 
                     ref={ref}
                    placeholder="Add Product on Stock" 
                    aria-label="Username" aria-describedby="basic-addon1"/>
                    
                    <button  onClick={handleStockQ}
                     type="button" className="btn btn-success input-group-text" 
                    id="basic-addon1"> <i className="fa-solid fa-circle-plus fa-xl">
                        </i> Add Stock</button>
                        <Link to={'/manageinventory'}>
                     <button className="btn btn-active btn-secondary">Manage Inventories</button>
                </Link>
                </div>
                            
                <button className='stock-btn' onClick={ ()=> deliverHandle(car)} > <i className="fa-solid fa-truck"></i> Deliverd </button>
            </div>


        </div>
    );
};

export default CarInfo;