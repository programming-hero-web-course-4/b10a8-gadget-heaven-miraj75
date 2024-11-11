import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

export const cartContext = createContext();

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        toast.success(`${item.product_title} added to the Cart`);
    };

    const addToWishList = (item) => {
        setWishList([...wishList, item]);
        toast.success(`${item.product_title} added to the WishList`);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.product_id !== id));
        toast.info('Item removed from Cart');
    };

    const removeFromWishList = (id) => {
        setWishList((prevWishList) => prevWishList.filter((item) => item.product_id !== id));
        toast.info('Item removed from WishList');
    };

    return (
        <div className="max-w-7xl mx-auto">
            <cartContext.Provider value={{ cart, wishList, addToCart, addToWishList, removeFromCart, removeFromWishList }}>
                <Navbar />
                <Outlet />
                <Footer />
                <ToastContainer />
            </cartContext.Provider>
        </div>
    );
};

export default Root;
