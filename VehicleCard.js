import React from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => (
    <div>
        <h2>{vehicle.title}</h2>
        <p>Make: {vehicle.make}</p>
        <p>Model: {vehicle.model}</p>
        <p>Price: ${vehicle.price}</p>
        <Link to={`/vehicles/${vehicle.id}`}>View Details</Link>
    </div>
);

export default VehicleCard;
