import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = ( ) => {
    const {invenId} = useParams();
    
    return (
        <div>
            <h1>This is details of inventory: {invenId}</h1>
        </div>
    );
};

export default InventoryDetails;