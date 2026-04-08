import axios from "axios";
import { useEffect, useState } from "react";

// HOW TO LOOP THROUGH ARRAY IN REACT AND ALSO FOR API FETCH
const List = () => {
  // const products = ["Wears", "Gadgets", "Food", "Cars"]
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios("https://dummyjson.com/recipes");
      setData(response.data.recipes);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
   fetchData()
  }, []);

  return (
    <div>
      {loading && (
        <div className="w-full h-screen flex justify-center items-center">
          ClipLoader size={50} color="blue"
        </div>
      )}
      {data.map((product) => {
        <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default List;

// products.map((product, index)=>(
// <div key={index}> {product} {index}</div>
