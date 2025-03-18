import Image from "next/image"
import Link from "next/link"

export default function Categories({ items }: CategoriesProps) {
    return (
        <section>
            <h1 className="text-2xl md:text-4xl text-center font-bold md:mb-6">Product Categories</h1>
            <div className="overflow-x-scroll no-scrollbar mb-10">
                <div className="flex gap-3">
                    {items.slice(0,8).map((category, index) => (
                        <Link key={index} className="flex flex-col items-center cursor-pointer" href={`/products?category=${category.name}`}>
                            <Image src={category?.image || "/images/Hospital Bedsheet/Multi Color Bedsheet.webp"} height={500} width={500} alt={category.name} className="h-24 w-24 min-w-32 aspect-square object-contain" />
                            <p className="text-xs md:text-md text-center mt-2">{category.name}</p>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-3">
                    {items.slice(8,items.length).map((category, index) => (
                        <Link key={index} className="flex flex-col items-center cursor-pointer" href={`/products?category=${category.name}`}>
                            <Image src={category?.image || "/images/Hospital Bedsheet/Multi Color Bedsheet.webp"} height={500} width={500} alt={category.name} className="h-24 w-24 min-w-32 aspect-square object-contain" />
                            <p className="text-xs md:text-md text-center mt-2">{category.name}</p>
                        </Link>
                    ))}
                </div>
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