import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import products from "../../data/products";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-2">${product.price}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;