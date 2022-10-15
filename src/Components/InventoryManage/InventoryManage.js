import React, { useEffect, useState } from 'react';
import "../InventoryManage/InventoryManage.css"
const InventoryManage = () => {
    const [manageCar, setManageCar] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then( res => res.json())
        .then( data => setManageCar(data))
    } ,[]);

    //Delete car
    const handleDeleteCar = _id => {
        const sure = window.confirm('Are you sure to Delete?')
        if(sure){
            console.log('funtions worked', _id)
            const url = `http://localhost:5000/inventory/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log('deleted');
                    //delete from ui
                    const remainingProduct = manageCar.filter(manCar => manCar._id !== _id);
                    setManageCar(remainingProduct);
                }
            })
        }
    }
    return (
        <div>
            <div>
            {
                manageCar.map( (manCar) => 
                <div className='carinfo'>
                <div className='carItem'>
                    <div>
                        <img src={manCar.carImage} alt="car img" />
                    </div>
                    <div>
                        <h3 className='fw-bold mb-1'>Car Name: {manCar.name}</h3>
                        <h3 className='fw-bold mb-1'>Car Price: {manCar.price}</h3>
                        <h3 className='fw-bold mb-1'> Quantity: {manCar.quantity}</h3>
                        <h3 className='fw-bold mb-1'>Description: {manCar.description}</h3>
                    </div>
                    <div>
                       <button 
                       onClick={() => handleDeleteCar(manCar._id)}
                       type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can fa-2xl"></i></button>
                    </div>
                </div> 
                    <div className='container addNewBtn'>
                        <button type="button" className="btn btn-primary w-50 "> <i className="fa-solid fa-circle-plus fa-xl"></i>  Add New Item </button>
                    </div>
               </div>
                 )
            }
            </div>
        </div>
    );
};

export default InventoryManage;