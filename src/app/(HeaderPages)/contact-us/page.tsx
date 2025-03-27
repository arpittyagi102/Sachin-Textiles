'use client'
import Footer from "@/components/Home/Footer";

export default function Page() {

    return (
        <>
            <div className="w-screen py-2 md:py-4 px-4 md:px-10 flex md:flex-row flex-col gap-4 md:gap-10">
                <div className="left grow order-2 md:order-1">
                    <div className="bg-neutral-300 h-48 w-full rounded-xl hidden md:block"></div>
                    <div className="md:mt-10 bg-neutral-100 p-4 md:p-10 md:text-xl w-full rounded-xl">
                        <p className="mb-2 md:mb-4">Mr. Sachin Goyal</p>
                        <p className="mb-2 md:mb-4">+918045801395</p>
                        <p>Bada Mandir, Chungi No. 3, Muradnagar,<br />
                            Near Bada Mandir, Murad Nagar Bazar,<br />
                            Muradnagar-201206, Uttar Pradesh, India</p>
                    </div>
                </div>

                <div className="bg-neutral-300 h-48 w-full rounded-xl md:hidden order-1"></div>

                <form className="right bg-neutral-100 border border-neutral-400 rounded-xl grow p-3 md:p-10 flex flex-col justify-end order-1 md:order-2" action="https://formbold.com/s/3Oxq2" method="POST">
                    <input type="text" name="name" placeholder="Your Name" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded" required/>
                    <input type="text" name="phone" placeholder="Phone Number" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded" />
                    <textarea name="message" className="text-lg w-full p-2 md:p-4 mb-4 bg-white border border-neutral-300 rounded" rows={5} placeholder="Message" required></textarea>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-primary text-white px-6 py-2 mt-4 rounded">Enquire Now</button>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    );
}