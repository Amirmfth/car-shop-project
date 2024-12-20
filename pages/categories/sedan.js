import CarList from '@/components/templates/CarList';
import carsData from '@/data/carsData';
import React from 'react'

function Sedan() {
    const sedanCars = carsData.filter((car) => car.category === "sedan");
    return <CarList data={sedanCars} />;
}

export default Sedan