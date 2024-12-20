import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
function SearchBar() {
  const router = useRouter();
  // states
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  //   handler
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter minimum and maximum price!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Enter min-price"
        />
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Enter max-price"
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
