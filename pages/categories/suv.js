import CarList from '@/components/templates/CarList';
import carsData from '@/data/carsData';
import React from 'react'

function SUV() {
  const suvCars = carsData.filter((car) => car.category === "suv");
    return <CarList data={suvCars} />;
}

export default SUV