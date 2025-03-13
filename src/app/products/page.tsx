"use client"
import Products from "@/components/Products";
import { useSelector } from 'react-redux';
import { PRODUCTS } from "@/constants";
import { useState, useEffect } from "react";
import type { RootState } from '@/lib/store';

export default function Page() {
    const searchString = useSelector((state: RootState) => state.search.value);
    const category = useSelector((state: RootState) => state.search.category);
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    useEffect(() => {
        let result = PRODUCTS;

        // Apply search filter
        if (searchString) {
            result = result.filter((product) =>
                product.Product_Name.toLowerCase().includes(searchString.toLowerCase())
            );
        }

        // Apply category filter
        if (category !== "All Products" && category) {
            result = result.filter((product) => product.Product_Category === category);
        }

        setFilteredProducts(result);
    }, [searchString, category]);  // This will run every time either searchString or category changes

    return (
        <div>
            <Products items={filteredProducts} />
        </div>
    );
}
