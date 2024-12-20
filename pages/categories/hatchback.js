import Card from "@/components/modules/Card";
import carsData from "@/data/carsData";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
  return <div>
    {hatchbackCars.map(car => (<Card {...car}/>))}
  </div>;
}

export default Hatchback;
