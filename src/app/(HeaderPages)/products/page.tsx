"use client";
import Products from "@/components/Products/Products";
import Categories from "@/components/Products/Categories";
import { PRODUCTS, CATEGORIES } from "@/constants";
import { Suspense, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Home/Footer";

// Wrapping the Page component itself with Suspense for the useSearchParams
export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
        </Suspense>
    );
}

function ProductPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const majorCategory = searchParams.get("Major_Category");
    const searchString = useSelector((state: RootState) => state.search.value);
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    useEffect(() => {
        let result = PRODUCTS;
    
        if (searchString) {
            result = result.filter((product) =>
                product.Product_Name.toLowerCase().includes(searchString.toLowerCase())
            );

            setFilteredProducts(result);
        }
    },[searchString]);


    useEffect(() => {
        let result = PRODUCTS;

        if (category && category !== "All Products") {
            result = result.filter((product) => product.Product_Category === category);
            setFilteredProducts(result);
        }

    }, [category]);

    
    useEffect(() => {
        let result = PRODUCTS;

        if (majorCategory) {
            result = result.filter((product) => product.Major_Category === majorCategory);
            setFilteredProducts(result);
            return;
        }
    }, [majorCategory]);
    

    return (
        <>
            {/* Conditionally render Categories only if no searchString or category */}
            {!searchString && (!category || category === "All Products") && !majorCategory ? (
                <Categories items={CATEGORIES} />
            ) : null}
            <Products items={filteredProducts} />
            <Footer />
        </>
    );
}
