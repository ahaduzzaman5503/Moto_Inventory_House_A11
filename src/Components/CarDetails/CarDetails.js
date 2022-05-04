import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const {carId} = useParams();
    const [cardital, setcarDetail] = useState({});

    useEffect(() => {
        const url = `car.json/cardetails/${carId}`;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setcarDetail(data));
    },[carId])
    return (
        <div>
            {cardital.name}
            {cardital.price}
            <h2>This is car details: {carId}</h2>
        </div>
    );
};

export default CarDetails;