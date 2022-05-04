import React from 'react';
import "./StockPD.css";


const StockPD = ({carDetails, singleCarDetailsHandle} ) => {
    const {carImage, name, price, description, supplierName, quantity} = carDetails;
    console.log(carDetails)
 

    return (
        <div className='stock-pd'>
            <h1> I am stock product details  </h1>
            <img src={carImage} alt="carPhoto" />
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <p>{description}</p>
            <h3>Suppliers:  {supplierName}</h3>
            <h3>Quantity:   {quantity}</h3>
            <p>Total car length: {carDetails.length}</p>
            
        </div>
    );
};

export default StockPD;