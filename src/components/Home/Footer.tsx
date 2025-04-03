import Link from "next/link";
import { SOCIAL_MEDIA } from "@/constants";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full mt-8 flex justify-center">
            <div className="p-2 pb-8 md:p-8 flex flex-col md:flex-row justify-between relative max-w-6xl w-full">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-screen bg-[#E8F7FC] -z-1"></div>

                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-semibold text-primary">Quick Links</h1>
                    <ul className="md:list-disc ml-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>

                    <img src="/images/Home/Footer/trusted-seller.png" alt="Trusted Seller" className="mt-4 h-12 mx-auto md:mx-0" />
                </div>
                
                <div className="mt-8 md:mt-0 text-center">
                    <h1 className="text-2xl font-semibold text-primary">Address</h1>
                    <p>Bada mandir, Rawli road, Malik Nagar</p>
                    <p className="mb-4">Muradnagar, Uttar Pradesh 201206</p>

                    <Link href="/products" className="px-4 py-2 border border-primary text-primary my-4 rounded-lg">
                        Shop Now
                    </Link>

                    <ul className="hidden md:flex items-center justify-center space-x-2 mt-4">
                        {SOCIAL_MEDIA.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} target="_blank" rel="noreferrer">
                                    <Image src={item.icon} alt={item.name} width={32} height={32} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 md:mt-0 text-center md:text-right">
                    <h1 className="text-2xl font-semibold text-primary">Contact Info</h1>
                    <Link href="mailto:sachingoyal10021989@gmail.com​" className="block my-2 ">sachingoyal10021989@gmail.com</Link>
                    <Link href="tel:+9108272865740" className="block">+91 082728 65740</Link>

                    <h1 className="text-2xl font-semibold text-primary mt-8">Powered by</h1>
                    <img src="/images/Home/Footer/Verzon.png" alt="Verzon" className="h-16 mx-auto md:mr-0" height={24}/>
                </div>
 
                <div className="text-xs absolute bottom-1 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <p>© 2025 Sachin Textiles. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}