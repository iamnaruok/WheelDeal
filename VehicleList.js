import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleCard from '../components/VehicleCard';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await axios.get('/api/vehicles');
            setVehicles(response.data);
        };
        fetchVehicles();
    }, []);

    return (
        <div>
            <h1>Available Vehicles</h1>
            <div>
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
};

export default VehicleList;
