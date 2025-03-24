
export default function BestSellers() {
    return (
        <section className="flex flex-col items-center py-8 relative md:py-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-screen h-48 bg-rose-100 -z-1 bg-gradient-to-b from-green-300 to-white"></div>
            <h1 className="text-6xl font-bold text-green-800">Best Sellers</h1>

            <div className="flex flex-col md:flex-row items-center justify-center m-8 md:m-20">
                {/* <Product image="/images/Products/1.jpg" name="Product 1" price={100} />
                <Product image="/images/Products/2.jpg" name="Product 2" price={200} />
                <Product image="/images/Products/3.jpg" name="Product 3" price={300} /> */}
            </div>
        </section>
    )
}