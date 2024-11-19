import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start text-white relative">
            <div className="bg-purple-600 rounded-b-lg w-full h-2/3 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl md:text-5xl font-bold py-4 max-w-4xl">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="bg-white text-purple-600 px-6 py-2 mb-32 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
                    <a href="#shop">Shop Now</a>
                </button>
            </div>
            <div className="relative top-[100px] transform -translate-y-1/2 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <img
                        src={banner}
                        alt="Gadget Heaven Accessories"
                        className="w-[762px] h-[363px] relative z-10"
                    />
                </div>
            </div>
            <h2 id="shop" className="text-5xl font-bold text-black mb-6">Explore Cutting-Edge Gadgets</h2>
            <div className="flex w-full px-10 my-10 gap-8 items-start">
                <div className="flex flex-col p-6 border rounded-lg bg-white text-black self-start space-y-4">
                    {["All Products", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone"].map((category, index) => (
                        <Link
                            key={index}
                            to="/"
                            className={`block w-full text-center py-2 px-4 rounded-full font-semibold ${
                                index === 0 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
                            } hover:bg-purple-700 hover:text-white transition`}
                        >
                            {category}
                        </Link>
                    ))}
                </div>
                <div className="flex-1">
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;
