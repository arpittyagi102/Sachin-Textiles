"use client"
import { useState } from "react";
import AddToBagIcon from "../Products/AddToBagIcon";
import Link from "next/link";

export default function BestSellers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4; // Number of products to show at a time

    // Move to the next set of products
    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < someProducts.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Move to the previous set of products
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="flex flex-col md:flex-row items-center relative py-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-screen h-48 bg-rose-100 -z-1 bg-gradient-to-b from-green-300 to-white"></div>
            <h1 className="text-4xl p-3 md:p-0 md:text-6xl font-bold text-green-800">Best Sellers</h1>

            {/* Carousel Container */}
            <div className="relative md:w-[80%]">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-1 py-0 px-2 opacity-50 z-2 bg-green-800 text-white rounded-full shadow-md top-1/2 transform -translate-y-1/2"
                >
                    &#8592;
                </button>

                {/* Product Carousel */}
                <div className="flex overflow-scroll no-scrollbar">
                    <div
                        className="flex transition-transform duration-500 w-screen"
                        style={{ transform: `translateX(-${currentIndex * 100 / itemsPerSlide}%)` }}
                    >
                        {someProducts.map((product, index) => (
                            <Product key={index} item={product} />
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-1 py-0 px-2 opacity-50 z-2 bg-green-800 text-white rounded-full shadow-md top-1/2 transform -translate-y-1/2"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

function Product({ item }) {
    return (
        <Link
            className="m-1 p-2 bg-white rounded-xl border border-neutral-300 md:w-56"
            href={`/products/${item?.Product_Name?.replace(/ /g, "-")}/${item.id}`}
        >
            <img
                loading="lazy"
                decoding="async"
                height={500}
                width={500}
                src={"/images/Products/" + item.Images[0]}
                alt={item.Product_Name}
                className="w-full object-cover rounded-lg aspect-[1.25]"
            />

            <div className="bottom flex justify-between items-center md:m-2">
                <div className="left max-w-3/4">
                    <h2 className="text-xs md:text-md md:font-bold mt-2">{item.Product_Name}</h2>
                    <div className="flex flex-col md:flex-row">
                        <p className="text-primary text-xs md:text-md mr-2">₹{item.Price || "00"}</p>

                        <div className="flex items-center">
                            {Array(item.rating || 5)
                                .fill(0)
                                .map((_, i) => (
                                    <svg
                                        width="16"
                                        key={i}
                                        height="16"
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z"
                                            fill="#F9D30E"
                                        />
                                    </svg>
                                ))}
                        </div>
                    </div>
                </div>

                <AddToBagIcon product={item} addClassName="" />
            </div>
        </Link>
    );
}



const someProducts = [
    {
        "Product_Category": "Garbage bag",
        "Images": [
            "transblue_gb.webp",
            "trans_green_gb.webp",
            "trans_white_gb.webp",
            "transpink_gb (1).webp",
            "trans_black_gb.webp"
        ],
        "Product_Name": "Clear Garbage bag",
        "Description": "We have comprehensive range of high quality Trash Bags that finds application in various areas. Our range of Trash Bags is widely appreciated by the clients, owing to its eco-friendliness and long lasting nature. The Trash Bags offered by us have high endurance and are light weighted. Draw string trash bags that we manufacture can be availed in various sizes.",
        "Feature": "recyclabe",
        "Price": "",
        "Gender": "",
        "Style": "",
        "Matterial": "Plastic",
        "Pattern": "",
        "Color": "green black white blue pink",
        "Sleeve_Style": "",
        "Size": "small, medium, large, Xl",
        "type": "",
        "handeling": "open top",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0001"
    },
    {
        "Product_Category": "Garbage bag",
        "Images": [
            "black_garbage_bag.webp",
            "green_garbage_bag.webp",
            "white_garbage_bag.webp"
        ],
        "Product_Name": "Garbage bag",
        "Description": "",
        "Feature": "recyclabe",
        "Price": "",
        "Gender": "",
        "Style": "",
        "Matterial": "Plastic",
        "Pattern": "",
        "Color": "black white green",
        "Sleeve_Style": "",
        "Size": "small, medium, large, Xl",
        "type": "",
        "handeling": "open top",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0002"
    },
    {
        "Product_Category": "Sofa Astar Fabric",
        "Images": [
            "brown_sofa_astar_fab.webp",
            "Sofa Astar Fabric.webp"
        ],
        "Product_Name": "Sofa Astar Fabric",
        "Description": "",
        "Feature": "",
        "Price": "25/meter",
        "Gender": "",
        "Style": "Plain",
        "Matterial": "Cotton",
        "Pattern": "",
        "Color": "White&Blue",
        "Sleeve_Style": "",
        "Size": "Diffently available",
        "type": "",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "Plain",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0003"
    },  
    {
        "Product_Category": "Kitchen Apron",
        "Images": [
            "Black Kitchen Apron.webp",
            "Kitchen Apron.webp",
            "product-jpeg-500x500.webp"
        ],
        "Product_Name": "Apron",
        "Description": "The Kitchen Cotton Apron is the perfect addition to your cooking routine. Made with high-quality cotton material, this apron is both durable and comfortable. The plain design comes in a sleek black color, making it a stylish choice for any home cook or professional chef. This apron is medium-sized, ensuring a comfortable fit for most individuals. Not only is it practical, but its also easy to clean. Its washable, so you can use it again and again without worrying about stains or spills. Whether youre cooking up a storm or simply doing some light cleaning in the kitchen, this apron is the perfect accessory to keep you looking and feeling your best.",
        "Feature": "",
        "Price": "80/piece",
        "Gender": "",
        "Style": "Plain",
        "Matterial": "Cotton",
        "Pattern": "",
        "Color": "Black White",
        "Sleeve_Style": "",
        "Size": "Medium",
        "type": "",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "Plain",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0007"
    },
    {
        "Product_Category": "Bed Comforter",
        "Images": [
            "pink_bed_comforter.webp",
            "white_bed_comfortor.webp"
        ],
        "Product_Name": "Bed Comforter",
        "Description": "Introducing the Pink Bed Comforter, the perfect addition to your bedroom decor. Made with 100% cotton material, this comforter is soft and comfortable to use. The queen size makes it ideal for domestic use, ensuring you get a cozy and comfortable sleep every night. The printed pattern adds a touch of elegance to your room, making it a stylish and functional choice for any room. The cotton filling provides warmth and comfort, keeping you snug all night long. The Pink Bed Comforter is the perfect way to add a pop of color to your bedroom while keeping you warm and cozy.",
        "Feature": "",
        "Price": "800/piece",
        "Gender": "",
        "Style": "",
        "Matterial": "Cotton",
        "Pattern": "Printed",
        "Color": "pink White",
        "Sleeve_Style": "",
        "Size": "Queen",
        "type": "",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "Cotton",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0008"
    },
    {
        "Product_Category": "PPE Kit",
        "Images": [
            "ppe_kit.webp"
        ],
        "Product_Name": "PPE Kit",
        "Description": "Stay safe and protected with our White Coverall PPE Kit. Designed for unisex use in hospitals, this kit is made of high-quality non-woven material that ensures maximum comfort and durability. The white color not only adds a professional touch but also makes it easier to identify any contamination. The kits water-proof feature provides additional protection against fluids, ensuring that your clothes remain dry during the day. The kit is disposable, making it easy to discard after use. This White Coverall PPE Kit is designed to provide complete coverage for your body, including your head and feet, ensuring that you are protected from head to toe. The kit is easy to wear, and it wont restrict your movements, making it ideal for medical professionals who need to move around quickly.",
        "Feature": "Water Proof",
        "Price": "200/piece",
        "Gender": "Unisex",
        "Style": "",
        "Matterial": "Non-woven",
        "Pattern": "",
        "Color": "Blue White",
        "Sleeve_Style": "",
        "Size": "",
        "type": "",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "Disposable",
        "Shape": "",
        "Washable": "",
        "id": "0009"
    },
    {
        "Product_Category": "PPE Kit",
        "Images": [
            "white_ppe_kit.webp"
        ],
        "Product_Name": "PPE Kit",
        "Description": "The Hospital PPE Kit is the perfect solution for healthcare professionals who require high-quality personal protective equipment. This kit is manufactured from non-woven materials which provide excellent protection against water and other fluids. The kit is designed to be disposable, making it easy to use and dispose of after each use. The white color is perfect for hospital settings and is unisex, making it suitable for both men and women. The Hospital PPE Kit is reusable, meaning that it can be used multiple times before disposing of it. This makes it cost-effective and a great solution for hospitals and clinics that require a large supply of PPE. The kit is made from high-quality materials that are designed to withstand regular use and wear and tear. The kit is ideal for use in hospitals, clinics, and other medical settings where healthcare professionals require personal protective equipment. It is perfect for use during medical procedures such as surgeries, examinations, and other medical procedures that require high-quality PPE.",
        "Feature": "Water Proof",
        "Price": "300/piece",
        "Gender": "Unisex",
        "Style": "",
        "Matterial": "Plastic",
        "Pattern": "",
        "Color": "White",
        "Sleeve_Style": "",
        "Size": "",
        "type": "",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "Yes",
        "Disposable": "Disposable",
        "Shape": "",
        "Washable": "",
        "id": "0010"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "white-gabardine-doctor-coat-500x500.webp"
        ],
        "Product_Name": "White Gabardine Doctor Coat",
        "Description": "The White Gabardine Doctor Coat is a must-have for female doctors who prioritize comfort, style, and professionalism. Made with high-quality cotton fabric, this doctor coat is perfect for long hours at work. The plain pattern and white color add a touch of elegance to the overall look, making it suitable for various medical settings. The coat comes in four different sizes- S, M, L, and XL, ensuring a perfect fit for every body type. The long sleeves provide ample coverage and protection, making it a practical choice for medical professionals.",
        "Feature": "1 Piece",
        "Price": "350/piece",
        "Gender": "Female",
        "Style": "",
        "Matterial": "Cotton",
        "Pattern": "Plain",
        "Color": "White",
        "Sleeve_Style": "Long",
        "Size": "S.M,L,XL",
        "type": "Doctor Coat",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0050"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "nylon-doctor-coat-500x500.webp"
        ],
        "Product_Name": "Nylon Doctor Coat",
        "Description": "Introducing our Nylon Doctor Coat for women, the perfect uniform for healthcare professionals. This coat is made from high-quality nylon fabric, which is durable and easy to clean, making it great for everyday wear. The coat comes in four sizes: S, M, L, and XL, ensuring a comfortable and ideal fit for women of different sizes. The plain pattern and white color of the coat create a professional and clean look, perfect for any medical setting. With a long sleeve style, this coat offers full coverage and protection, keeping you comfortable throughout long shifts. The coat features one waist pocket, providing ample space to store essential tools and equipment.",
        "Feature": "1 Piece",
        "Price": "350/piece",
        "Gender": "Female",
        "Style": "",
        "Matterial": "Nylon",
        "Pattern": "Plain",
        "Color": "White",
        "Sleeve_Style": "Long",
        "Size": "S.M,L,XL",
        "type": "Doctor Coat",
        "handeling": "",
        "Waist_Pocket": "Waist Pockets 1",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0051"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "white_cotton_nurse_dress.webp"
        ],
        "Product_Name": "White Cotton Nurse Dress",
        "Description": "Introducing the White Cotton Nurse Dress, a comfortable and stylish uniform for female nurses. Made from high-quality cotton fabric, this dress ensures breathability and allows ease of movement throughout the day. The standard collar and plain white color give a professional look, while the long sleeves provide coverage and protection. Available in L and XL sizes, this nurse uniform is designed to fit perfectly and provide ultimate comfort. Whether its a long shift or a busy day at work, this dress will keep you feeling fresh and comfortable all day long.",
        "Feature": "1 Set",
        "Price": "400/set",
        "Gender": "Female",
        "Style": "",
        "Matterial": "Cotton",
        "Pattern": "Plain",
        "Color": "White",
        "Sleeve_Style": "Long",
        "Size": "L.XL",
        "type": "Nurse Uniform",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0052"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "cotton_doctor_coat.webp"
        ],
        "Product_Name": "Cotton Doctor Coat",
        "Description": "Introducing the Cotton Doctor Coat, perfect for male doctors who want to look professional and feel comfortable. Made of high-quality cotton fabric, this coat feels soft and breathable against the skin. The long sleeves provide ample coverage and the white color exudes a sense of cleanliness and purity. With one chest pocket and one waist pocket, you can easily store essential medical tools. The coat comes in size M, offering a comfortable fit for most male doctors. Whether youre in a private clinic or a hospital, this doctor coat will help you look the part.",
        "Feature": "1 Piece",
        "Price": "350/piece",
        "Gender": "Male",
        "Style": "",
        "Matterial": "Cotton",
        "Pattern": "Plain",
        "Color": "White",
        "Sleeve_Style": "Long",
        "Size": "M",
        "type": "Doctor Coat",
        "handeling": "",
        "Waist_Pocket": "Waist Pocket - 1 Chest 1",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0053"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "cotton-lab-coat-500x500.webp"
        ],
        "Product_Name": "Cotton Lab Coat",
        "Description": "Introducing the Cotton Doctor Coat, perfect for male doctors who want to look professional and feel comfortable. Made of high-quality cotton fabric, this coat feels soft and breathable against the skin. The long sleeves provide ample coverage and the white color exudes a sense of cleanliness and purity. With one chest pocket and one waist pocket, you can easily store essential medical tools. The coat comes in size M, offering a comfortable fit for most male doctors. Whether youre in a private clinic or a hospital, this doctor coat will help you look the part.",
        "Feature": "1 piece",
        "Price": "350/piece",
        "Gender": "male",
        "Style": "",
        "Matterial": "cotton",
        "Pattern": "Plain",
        "Color": "white",
        "Sleeve_Style": "long",
        "Size": "M",
        "type": "Doctor Coat",
        "handeling": 3000,
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0054"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "half-sleeve-lab-coat-500x500.webp"
        ],
        "Product_Name": "Half Sleeve Lab Coat",
        "Description": "Introducing our Half Sleeve Lab Coat, designed for male doctors who value comfort and style. Made from high-quality cotton fabric, this plain white lab coat features a short sleeve style that provides ease of movement and breathability during long hours of work. With its L.XL size, it offers a comfortable fit for different body types. It comes with a chest pocket to store your essentials while on duty. This doctor coat is perfect for medical professionals who need a durable and comfortable lab coat that can withstand daily wear and tear.",
        "Feature": "100 Piece",
        "Price": "310/piece",
        "Gender": "Male",
        "Style": "",
        "Matterial": "cotton",
        "Pattern": "Plain",
        "Color": "white",
        "Sleeve_Style": "Short",
        "Size": "L.XL",
        "type": "Doctor Coat",
        "handeling": "",
        "Waist_Pocket": "Chest Pockets 1",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0055"
    },
    {
        "Product_Category": "Hospital Uniform",
        "Images": [
            "Full Sleeves Doctor Lab Coat.webp"
        ],
        "Product_Name": "Full Sleeves Doctor Lab Coat",
        "Description": "The Full Sleeves Doctor Lab Coat is an essential item for any male doctor or medical professional. Made from high-quality cotton fabric, this plain white coat is both comfortable and durable. The standard collar adds a professional touch to the coat, making it perfect for use in hospitals, clinics, and other medical facilities. The coat comes in a size M with long sleeves, providing ample coverage and protection during work. Its gender-specific design ensures a perfect fit for male doctors. This doctor coat is perfect for those who want a comfortable, easy-to-wear, and stylish lab coat to wear in their profession.",
        "Feature": "1 Piece",
        "Price": "450/piece",
        "Gender": "Male",
        "Style": "",
        "Matterial": "cotton",
        "Pattern": "Plain",
        "Color": "white",
        "Sleeve_Style": "Long",
        "Size": "M",
        "type": "Doctor Coat",
        "handeling": "",
        "Waist_Pocket": "",
        "Texture": "",
        "Strength": "",
        "Filling": "",
        "Reusable": "",
        "Disposable": "",
        "Shape": "",
        "Washable": "",
        "id": "0056"
    },
]