import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_LINK } from "../utils/links";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductView = () => {

  const dispatch = useDispatch()
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    const res = await fetch(PRODUCT_LINK);
    const json = await res.json();

    const selectedProduct = json.find((product) => product.id === Number(id));
    console.log("selected::::", selectedProduct);

    setData(selectedProduct);
  }

  const handleClick = () => {
    dispatch(addItem(data))
  }

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
        <div className="mt-20 max-w-lg h-[600px] rounded-lg shadow-sm flex flex-col overflow-hidden items-center">
          <div className="w-full h-[400px] p-4">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center px-4 mt-4">
            <h2 className="text-lg font-semibold">{data.title}</h2>
          </div>
          <div className="flex gap-4 justify-center mt-5">
            <button className="text-sm text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">Wishlist</button>
            <button className="text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
                    onClick={handleClick}
                    >Add to cart</button>
          </div>
        </div>
    </div>
  );
};

export default ProductView;
