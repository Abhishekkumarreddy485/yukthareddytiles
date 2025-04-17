import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <a className="block bg-blue-500 text-white mt-2 p-2 rounded-md text-center">View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;