import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between my-3 px-5 bg-white">
            {/* Navigation */}
            <ul className="flex items-center space-x-12">
                <li> <Link href="/" className=" text-[16px]">
                    Home
                </Link> </li>
                <li> <Link href="/products" className=" text-[16px]">
                    Products
                </Link> </li>
                <li> <Link href="/about-us" className=" text-[16px]">
                    About Us
                </Link> </li>
                <li> <Link href="/contact-us" className=" text-[16px]">
                    Contact Us
                </Link> </li>
            </ul>

            {/* Social Media Icons */}
            <ul className="flex items-center space-x-4">
                <li><Link href="#" target="_blank" rel="noreferrer"><Image src="/icons/twitter.svg" alt="Twitter" width={30} height={30} /></Link></li>
                <li><Link href="#" target="_blank" rel="noreferrer"><Image src="/icons/facebook.svg" alt="Facebook" width={30} height={30} /></Link></li>
                <li><Link href="#" target="_blank" rel="noreferrer"><Image src="/icons/linkedin.svg" alt="Linkedin" width={30} height={30} /></Link></li>
                <li><Link href="#" target="_blank" rel="noreferrer"><Image src="/icons/youtube.svg" alt="Youtube" width={30} height={30} /></Link></li>
            </ul>
                
        </header>
    );
}