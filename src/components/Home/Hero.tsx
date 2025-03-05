import Image from 'next/image';

export default function Hero({ items }: { items: any }) {
    return (
        <section className="m-10 mx-14 relative">
            <h1 className="text-3xl font-bold mb-4">
                Making Every Fabric Count
            </h1>
            <p className="text-lg text-neutral-500 max-w-100">
                Lorem ipsum is a dummy or placeholder text c ommonly used in graphic design, publishing, and web development to fill empty spaces i
            </p>

            <div className="flex flex-wrap justify-between mt-6 gap-10">
                {items.map((item: any, index: number) => (
                    <div key={index} className='w-[27%]'>
                        <Image src={item.image} alt={item.name} height="300" width="300" className="aspect-square object-cover rounded-xl" />
                        <div className="p-4 bg-opacity-50 text-center">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen h-48 bg-rose-100 -z-1">

            </div>
        </section>
    );
    }