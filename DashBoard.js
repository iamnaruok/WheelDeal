import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [myVehicles, setMyVehicles] = useState([]);

    useEffect(() => {
        const fetchMyVehicles = async () => {
            const response = await axios.get('/api/vehicles/my', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMyVehicles(response.data);
        };
        fetchMyVehicles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/vehicles/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMyVehicles(myVehicles.filter(vehicle => vehicle.id !== id));
            alert('Vehicle deleted successfully.');
        } catch (error) {
            alert('Failed to delete vehicle.');
        }
    };

    return (
        <div>
            <h1>My Listings</h1>
            {myVehicles.map(vehicle => (
                <div key={vehicle.id}>
                    <h2>{vehicle.title}</h2>
                    <p>Price: ${vehicle.price}</p>
                    <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
