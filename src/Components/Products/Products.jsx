import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("Products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error loading data: {error}</p>; 

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Product product={product} key={product.product_id} />
                ))}
            </div>
        </div>
    );
};

export default Products;
