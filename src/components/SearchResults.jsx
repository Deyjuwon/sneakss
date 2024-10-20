/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import base from "../api/base"; // Import Airtable base
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewProductCard from "../components/NewProductCard";
import Spinner from "../components/Spinner";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query"); // Get search query from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);

      // Fetch products from Airtable and filter based on search query
      base("products")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
          const filteredProducts = records.filter((product) =>
            product.fields.ProductName.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filteredProducts);
          fetchNextPage();
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="pt-32 md:pt-24 ">
      <Header showSearchBar={true} />
      <div className="px-5 pb-0 md:pb-24">
        <div className="flex flex-col gap-4 pb-10">
          <p className="text-sm font-light">Search Results for "{query}"</p>
          <p className="text-3xl font-bold text-[#800000]">Products Found</p>
        </div>

        {loading ? (
          <Spinner />
        ) : products.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {products.map((product) => (
              <NewProductCard
                key={product.id}
                ProductID={product.fields.ProductID}
                shoeName={product.fields.ProductName}
                shoeGender={product.fields.Category}
                shoePrice={product.fields.Price}
                shoeImg={product.fields.ProductImage[0].url}
                shoeColor={product.fields.Color}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg flex items-center justify-center m-auto">No products found matching "{query}".</p>
        )}
      </div>
      <Footer bgColor="222222" textColor="white" />
    </div>
  );
};

export default SearchResults;
