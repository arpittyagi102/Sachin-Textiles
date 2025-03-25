import Image from 'next/image';

export default function Hero({ items }: HeroProps) {
    return (
        <section className="mb-10 md:m-10 md:mx-14 relative">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Making Every Fabric Count
            </h1>
            <p className="md:text-lg text-neutral-500 max-w-100">
            At Sachin Textiles, we believe that every thread woven, every fabric crafted, and every textile produced should serve a purpose—bringing comfort, durability, and excellence to those who use it. 
            </p>

            <div className="flex flex-wrap justify-between mt-6 md:gap-10">
                {items.map((item: HeroItem, index: number) => (
                    <div key={index} className='w-[27%]'>
                        <Image src={item.image} alt={item.name} height="300" width="300" className="aspect-square object-cover rounded-xl" />
                        <div className="p-2 md:p-4 bg-opacity-50 text-center">
                            <h3 className="md:text-xl font-bold">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen h-32 md:h-48 bg-rose-100 -z-1">

            </div>
        </section>
    );
}

type HeroItem = {
    name: string,
    image: string
}

type HeroProps = {
    items: HeroItem[]
}