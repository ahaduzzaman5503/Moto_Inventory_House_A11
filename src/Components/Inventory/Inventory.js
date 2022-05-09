import React, { useEffect, useState } from 'react';
import InventoryShow from '../InventoryShow/InventoryShow';
import "./Inventory.css";

const Inventory = (props) => {
    const [carInventory, setcarInventory] = useState([]);

    useEffect( () => {
        fetch('https://glacial-beach-89236.herokuapp.com/inventory')
        .then (res => res.json())
        .then(data => setcarInventory(data));
      }, [])


    return (
        <div className='inventory container w-75 mx-auto'>
            {
               carInventory.map (singleINventory => <InventoryShow
                key={singleINventory._id}
                singleINventory={singleINventory}
               ></InventoryShow>)
            }

        </div>
    );
};

export default Inventory;