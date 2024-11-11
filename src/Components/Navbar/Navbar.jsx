import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { cartContext } from "../../Root";

const Navbar = () => {
    const { cart, wishList } = useContext(cartContext);
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    return (
        <nav className={`sticky top-0 ${!isDashboard ? 'bg-purple-600 text-white' : 'bg-white text-black'} rounded-t-lg z-50`}> 
            <div className="mx-auto flex justify-between items-center p-4"> 
                <h1 className="text-xl font-bold">Gadget Heaven</h1>
                <div className="flex gap-3">
                    <Link to="/" className="hover:text-blue-200">Home</Link>
                    <Link to="/statistics" className="hover:text-blue-200">Statistics</Link>
                    <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
                </div>
                <div className="flex items-center gap-4">
                    {/* Cart Icon with count */}
                    <div className="relative">
                        <i className="bg-white text-black rounded-full border-2 p-2 fa-solid fa-cart-shopping"></i>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs font-bold px-2">
                                {cart.length}
                            </span>
                        )}
                    </div>

                    {/* Wishlist Icon with count */}
                    <div className="relative">
                        <i className="bg-white text-black rounded-full border-2 p-2 fa-regular fa-heart"></i>
                        {wishList && wishList.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs font-bold px-2">
                                {wishList.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
