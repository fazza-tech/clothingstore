import { useEffect, useState } from "react";
import { PRODUCT_LINK } from "../utils/links";
import ProductCard from "./ProductCard";
import {Link} from 'react-router-dom'
const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const res = await fetch(PRODUCT_LINK);
    const json = await res.json();
    setData(json)
    console.log(json)
  }

  return(
    
    <div>
      <h1 className="flex justify-center mt-10 font-bold text-5xl text-gray-800">Welcome to YesBuy</h1>
      <div className="flex justify-center mt-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 cursor-pointer">
              {data.map((product) => (
                  <Link to={`/productView/${product.id}`}>
                    <ProductCard key={product.id} product={product}/>
                  </Link>
              ))}
          </div>
      </div>
    </div>
  )
};

export default ProductList