"use client"
import Products from "@/components/Products/Products";
import Categories from "@/components/Products/Categories";
import { PRODUCTS, CATEGORIES } from "@/constants";

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const searchString = useSelector((state: RootState) => state.search.value);
    //const category = useSelector((state: RootState) => state.search.category);
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    useEffect(() => {
        let result = PRODUCTS;

        // Apply search filter
        if (searchString) {
            result = result.filter((product) =>
                product.Product_Name.toLowerCase().includes(searchString.toLowerCase())
            );
        }

        setFilteredProducts(result);
    }, [searchString]); 

    useEffect(() => {
        if (category !== "All Products" && category) {
            setFilteredProducts(PRODUCTS.filter((product) => product.Product_Category === category));
        }
    }
    , [category]); 

    return (
        <div>
            {!searchString && (!category || category=="All Products") ? (
                <Categories items={CATEGORIES} />
            ) : (null)
            }
            <Products items={filteredProducts} />
        </div>
    );
}
