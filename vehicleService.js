import axios from 'axios';

const API_URL = '/api/vehicles';

export const getAllVehicles = () => axios.get(API_URL);

export const addVehicle = (vehicle) =>
    axios.post(API_URL, vehicle, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
