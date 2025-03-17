import Image from "next/image"
import Link from "next/link"

export default function Categories({ items }: CategoriesProps) {
    return (
        <section>
            <h1 className="text-2xl md:text-4xl text-center font-bold md:mb-6">Product Categories</h1>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-1 md:gap-4 mb-10">
                {items.map((category, index) => (
                    <Link key={index} className="flex flex-col items-center cursor-pointer" href={`/products?category=${category.name}`}>
                        <Image src={category?.image || "/images/Hospital Bedsheet/Multi Color Bedsheet.webp"} height={500} width={500} alt={category.name} className="h-24 w-24 aspect-square object-contain" />
                        <p className="text-xs md:text-md text-center mt-2">{category.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

type CategoriesProps = {
    items: {
        name: string,
        image: string,
    }[]
}