import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { cartContext } from "../../Root";

const ProductsDetails = () => {
    const data = useLoaderData();
    const { productId } = useParams();
    const { addToCart, addToWishList } = useContext(cartContext);

    const product = data.find(item => item.product_id == productId);

    return (
        <div className="relative p-6 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-40 bg-purple-600"></div>

            {product ? (
                <div className="relative bg-white rounded-lg shadow-md p-8 w-full max-w-3xl z-10">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-purple-700">Product Details</h1>
                        <p className="text-gray-600">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start">
                        <div className="w-full md:w-1/3 bg-gray-200 rounded-md h-64 mb-6 md:mb-0">
                            <img src={product.product_image} alt={product.product_title} className="object-cover w-full h-full rounded-md" />
                        </div>

                        <div className="w-full md:w-2/3 md:pl-8">
                            <h2 className="text-2xl font-semibold text-gray-800">{product.product_title}</h2>
                            <p className="text-xl font-bold text-gray-700 mt-2">Price: ${product.price}</p>
                            <span className="inline-block bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full text-sm mt-2">{product.availability ? 'In Stock' : 'Out of Stock'}</span>
                            <p className="text-gray-500 mt-4">{product.description}</p>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-700">Specification:</h3>
                                <ol className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                    {product.Specification.map((spec, index) => <li key={index}> {spec}</li>)}
                                </ol>
                            </div>

                            <div className="mt-6 flex items-center">
                                <span className="text-gray-700 font-semibold">Rating</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15l5.09 3.64-1.64-6.36L18 8.36l-6.36-.27L10 2l-1.64 6.09-6.36.27L6.55 12l-1.64 6.36L10 15z" />
                                    </svg>
                                    <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button onClick={() => addToCart(product)} className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700">
                                    Add to Cart
                                </button>
                                <button onClick={() => addToWishList(product)} className="ml-4 text-gray-600 hover:text-gray-800">
                                    <i className="bg-white text-black rounded-full border-2 p-2 fa-regular hover:text-white hover:bg-red-600 fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Product not found.</p>
            )}
        </div>
    );
};

export default ProductsDetails;
