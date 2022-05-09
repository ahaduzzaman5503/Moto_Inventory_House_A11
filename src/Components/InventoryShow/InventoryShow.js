import React from 'react';
import "./InventoryShow.css";

const InventoryShow = (props) => {
    const { carImage, name, price, description, supplierName, quantity} = props.singleINventory;
    console.log(props.singleINventory)
    return (
        <div>
            <div className='main'>
           
            <img src={carImage} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <h3>Suppliers:  {supplierName}</h3>
            <h3>Quantity In Stock:   {quantity}</h3>
            </div>
        </div>
    );
};

export default InventoryShow;