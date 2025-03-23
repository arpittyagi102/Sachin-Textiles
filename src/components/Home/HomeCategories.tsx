export default function HomeCategories({ items }) {
    return (
        <div>
            <h1 className="ml-20 text-3xl">Shop by Category</h1>
            <section className="flex justify-between my-10">
                {items.map((image, index) => (
                    <img key={index} src={image} alt="dp" className="w-[18%]" />
                ))}
            </section>
        </div>
    )
}