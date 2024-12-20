import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterCars = carsData.filter(
    (car) => car.price > min && car.price < max
  );




  if(!filterCars.length) return <h3>Not found</h3>
  return <div>
    <CarList data={filterCars}/>
  </div>;
}

export default FilterCars;
