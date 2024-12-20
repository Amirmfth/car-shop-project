import CarList from '@/components/templates/CarList';
import carsData from '@/data/carsData';
import React from 'react'

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");
    return <CarList data={sportCars} />;
}

export default Sport