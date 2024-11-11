import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_title, product_image, price, product_id } = product;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
            <img 
                src={product_image} 
                alt={product_title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">{product_title}</h2>
            <p className="text-gray-600">Price: {price}k</p>
            <Link to={`/product/${product_id}`}>
                <button className="mt-4 border border-purple-600 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Product;
