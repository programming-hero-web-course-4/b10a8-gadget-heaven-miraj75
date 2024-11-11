import { useContext, useState } from 'react';
import { cartContext } from "../../Root";

const Dashboard = () => {
    const { cart, wishList, removeFromCart, removeFromWishList, addToCart } = useContext(cartContext);
    const [activeTab, setActiveTab] = useState('cart');
    const [sortedCart, setSortedCart] = useState(cart); // For sorted cart
    const [totalCost, setTotalCost] = useState(
        cart.reduce((sum, item) => sum + item.price, 0)
    );

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Handle sorting by price in descending order
    const handleSortByPrice = () => {
        const sorted = [...cart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
    };

    // Handle purchase (resets cart and total cost)
    const handlePurchase = () => {
        if (sortedCart.length > 0) {
            alert("Thank you for your purchase!");
            setSortedCart([]); // Clear the sorted cart
            setTotalCost(0);
        } else {
            alert("Your cart is empty.");
        }
    };

    // Update total cost whenever cart changes
    useState(() => {
        setTotalCost(cart.reduce((sum, item) => sum + item.price, 0));
    }, [cart]);

    return (
        <div className="min-h-screen flex flex-col items-center text-gray-800">
            <div className="bg-purple-700 w-full flex flex-col items-center justify-center text-center px-6 text-white py-12">
                <h1 className="text-5xl font-bold py-4">Dashboard</h1>
                <p className="text-lg md:text-xl max-w-2xl px-6 py-2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex gap-3 py-4">
                    <button
                        onClick={() => handleTabChange('cart')}
                        className={`px-6 py-2 font-semibold rounded-full ${
                            activeTab === 'cart' ? 'bg-white text-black' : 'border-2 text-white border-white'
                        }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => handleTabChange('wishlist')}
                        className={`px-4 py-2 font-semibold rounded-full ${
                            activeTab === 'wishlist' ? 'bg-white text-black' : 'border-2 text-white border-white'
                        }`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            {/* Display Cart or Wishlist items based on activeTab */}
            <div className="w-full max-w-3xl p-6">
                {activeTab === 'cart' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Cart</h2>
                        <div className="bg-blue-100 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl font-semibold">Total cost: ${totalCost.toFixed(2)}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSortByPrice}
                                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                                    >
                                        Sort by Price
                                    </button>
                                    <button
                                        onClick={handlePurchase}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>

                            {sortedCart.length > 0 ? (
                                sortedCart.map((item) => (
                                    <div
                                        key={item.product_id}
                                        className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
                                    >
                                        <img
                                            src={item.product_image}
                                            alt={item.product_title}
                                            className="w-16 h-16 rounded mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.product_title}</h3>
                                            <p className="text-gray-600">{item.product_description}</p>
                                            <p className="text-gray-800 font-bold">Price: ${item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                removeFromCart(item.product_id);
                                                setTotalCost(prev => prev - item.price); // Adjust total cost
                                            }}
                                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
                        <div className="bg-green-100 p-4 rounded-lg">
                            {wishList.length > 0 ? (
                                wishList.map((item) => (
                                    <div
                                        key={item.product_id}
                                        className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
                                    >
                                        <img
                                            src={item.product_image}
                                            alt={item.product_title}
                                            className="w-16 h-16 rounded mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.product_title}</h3>
                                            <p className="text-gray-600">{item.product_description}</p>
                                            <p className="text-gray-800 font-bold">Price: ${item.price}</p>
                                            <button 
                                                onClick={() => addToCart(item)} // Add item to Cart
                                                className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 mt-2"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromWishList(item.product_id)}
                                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>Your wishlist is empty.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
