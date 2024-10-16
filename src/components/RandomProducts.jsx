import base from "../api/base";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import NewProductCard from "./NewProductCard";

const RandomProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to shuffle the products array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        base("products")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                // Shuffle the records and update the state
                const shuffledRecords = shuffleArray(records);
                setProducts(shuffledRecords);
                fetchNextPage();
                setLoading(false);
            });
    }, []);

    return (
        <div className="px-5 py-10">
            <div className="flex w-full gap-10 overflow-x-auto">
                {loading ? (
                    <Spinner />
                ) : (
                    products.map((product) => (
                        <NewProductCard
                            key={product.id}
                            ProductID={product.fields.ProductID}
                            shoeName={product.fields.ProductName}
                            shoeGender={product.fields.Category}
                            shoePrice={product.fields.Price}
                            shoeImg={product.fields.ProductImage[0].url}
                            shoeColor={product.fields.Color}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default RandomProducts;
