import React from 'react';
import "./CarShow.css"

const CarShow = ({car, singleInventoryHandle}) => {
    const { _id, carImage, name, price, description, supplierName, quantity} = car;
    // console.log(car)

    return (
        <div className='carshow'>
            <img src={carImage} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <h3>Suppliers:  {supplierName}</h3>
            <h3>Quantity In Stock:   {quantity}</h3>
            <button className='stock-btn' onClick={ ()=> singleInventoryHandle(_id)} ><h4>Stock Update</h4> </button>
        </div>
    );
};

export default CarShow;