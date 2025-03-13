import { PRODUCTS } from "@/constants";

export default async function Page({ params }) {
    const { name, id } = await params;
    console.log(name, id);
    const pid = id.split("-")[0];
    console.log(pid);

    if(!pid){
        console.log("No id found");
        return <h1>Product not found</h1>
    }

    const product = PRODUCTS.find((product) => product.id === pid);
    if(!product){
        return <h1>Product not found</h1>
    }
    console.log("product", product);
  
    return (
      <main>
        <div className="Product-View flex justify-between gap-10">
            <div className="Product-View-Image rounded-xl overflow-hidden flex-1/2">
                <img src={product?.image || "/images/products/face-mask.png"} alt={product.Product_Name} className=" aspect-[4/3]"/>
            </div>
            <div className="Product-View-Details flex-1/2">
                <h1 className="text-4xl mb-5 font-bold">{product.Product_Name}</h1>
                <p className="text-neutral-500 mb-5">{product.Description}</p>
                <p className="text-2xl">MRP: <span className="text-3xl font-bold">₹{product.Price}</span></p>
                <p className="text-2xl text-neutral-500">Inclusive of all taxes</p>

                <div className="quote bg-neutral-200 p-4 pl-8 rounded-xl mt-5">
                    <ul><li className="list-disc">No refund Policy</li></ul>
                </div>

                <button className="bg-[#205781] text-white text-lg rounded-lg px-7 py-2 mt-5">
                    Add to Bag
                </button>
            </div>
        </div>
      </main>
    );
  }