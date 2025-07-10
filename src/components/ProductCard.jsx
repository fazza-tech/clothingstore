const ProductCard = ({product}) => {
    return(
        <div >
            <div className=" max-w-sm h-[420px] bg-white  rounded-lg shadow-sm flex flex-col overflow-hidden justify-center" >
                <img className="w-full h-60  object-contain p-8 rounded-t-lg" src={product.image} alt="" />
                <div className="p-4 flex flex-col justify-between ">
                    <p className="text-xl font-semibold tracking-tight mb-2 line-clamp-1 ">{product.title}</p>
                    <p className="text-3xl font-bold text-gray-900">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard