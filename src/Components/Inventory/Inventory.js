import React from 'react';

const Inventory = ({car, singleInventoryHandle}) => {
    // const {carImage, name, price, description, supplierName, quantity, id} = car;

    return (
        <div>
            <h1>I am Inventory</h1>
            {/* <img src={carImage} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <h3>Suppliers:  {supplierName}</h3>
            <h3>Quantity:   {quantity}</h3>
            {id}
            <button className='stock-btn' onClick={ ()=> singleInventoryHandle(car)} >Stock Update </button> */}
        </div>
    );
};

export default Inventory;