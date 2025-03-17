import { PRODUCTS } from "@/constants";
import Products from "@/components/Products/Products";
import Image from "next/image";
import AddToBag from "@/components/Products/AddToBag";

export default async function Page({ params }) {
    const { name, id } = await params;
    const pid = id.split("-")[0];

    if(!pid){
        console.log("No id found");
        return <h1>Product not found</h1>
    }

    const product = PRODUCTS.find((product) => product.id === pid);
    if(!product){
        return <h1>Product not found</h1>
    }
  
    return ( 
      <main>
        <div className="Product-View flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
            <div className="Product-View-Image rounded-xl overflow-hidden flex-1/2">
                <img loading="lazy" decoding="async" src={"/images/Products/"+product.Images[0]} alt={product.Product_Name} className=" aspect-[4/3]"/>
            </div>
            <div className="Product-View-Details flex-1/2">
                <h1 className="text-2xl md:text-4xl md:mb-5 font-bold">{product.Product_Name}</h1>
                <p className="text-xs md:text-md text-neutral-500 md:mb-5">{product.Description}</p>
                <p className="text-lg md:text-2xl">MRP: <span className="text-lg md:text-3xl font-bold text-primary">₹{product.Price}</span></p>
                <p className="text-lg md:text-2xl text-neutral-500">Inclusive of all taxes</p>

                <div className="quote bg-neutral-200 p-4 pl-8 rounded-xl mt-5">
                    <ul><li className="list-disc">No refund Policy</li></ul>
                </div>

                <AddToBag product={product} />
            </div>
        </div>

        <div>
            <h2 className="text-2xl md:text-4xl mt-10">Product Details</h2>
            <p className="text-xs md:text-md text-neutral-500 md:mb-5">{product.Description}</p>
            <ul className="ml-8 text-lg md:text-2xl">
                {Object.keys(product).map((key) => {
                    return (<div key={key}>
                        {(product[key] && key!="id") 
                            && 
                        <li className=" list-disc">{key}: {product[key]}</li>}
                    </div>)
                })}
            </ul>
        </div>

        <SimilarProducts product={product}/>
      </main>
    );
  }

  function SimilarProducts({product}) {
    const similar = PRODUCTS.filter((p) => {
        return p.Product_Category == product.Product_Category && p.id != product.id;
    });

    return (
        <div className="Similar-Products">
            <Products items={similar} title="Similar Products" />
        </div>
    )
  }