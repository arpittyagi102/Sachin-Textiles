import { PRODUCTS } from "@/constants";
import ProductView from "@/components/Products/ProductView";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }): Promise<Metadata> {
    const product = PRODUCTS.find(p => p.id === params.id);
    if (!product) {
        return { title: "Product not found" };
    }

    const url = `https://sachintextiles.in/products/${product?.Product_Name?.replace(/ /g, "-")}/${product.id}`
    const imageUrl = `/images/Products/${product.Images?.[0] || "/image/hc1.png"}`;
    const title = `${product.Product_Name} | Sachin Textiles`;
    const description = product.Description || "Explore this amazing product on Sachin Textiles.";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: url,
            images: [{ url: imageUrl }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = PRODUCTS.find((product) => product.id === params.id);
    if (!product) {
        return notFound();
    }

    return (
        <>
            {/* Injecting JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        name: product.Product_Name,
                        image: product.Images.map(img => `https://sachintextiles.in/images/Products/${img}`),
                        description: product.Description,
                        sku: product.id,
                        offers: {
                            "@type": "Offer",
                            url: `https://sachintextiles.in/products/${product?.Product_Name?.replace(/ /g, "-")}/${product.id}`,
                            priceCurrency: "INR",
                            price: product.Price_Value,
                            availability: "https://schema.org/InStock"
                        },
                        brand: {
                            "@type": "Brand",
                            name: "Sachin Textiles",
                        }
                    }),
                }}
            />
            <ProductView product={product} allProducts={PRODUCTS} />
        </>
    );
}
