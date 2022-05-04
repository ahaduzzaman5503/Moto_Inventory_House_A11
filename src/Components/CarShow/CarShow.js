import React from 'react';
import "./CarShow.css"

const CarShow = ({car, singleCarDetailsHandle}) => {
    const {carImage, name, price, description, supplierName, quantity} = car;

    return (
        <div className='carshow'>
            <img src={carImage} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <h3>Suppliers:  {supplierName}</h3>
            <h3>Quantity:   {quantity}</h3>
            <button className='stock-btn' onClick={ ()=> singleCarDetailsHandle(car)} >Stock Update </button>
        </div>
    );
};

export default CarShow;