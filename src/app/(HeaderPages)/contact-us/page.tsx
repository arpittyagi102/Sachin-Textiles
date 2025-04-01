'use client'
import Footer from "@/components/Home/Footer";

export default function Page() {

    return (
        <>
            <div className="w-screen py-2 md:py-4 px-4 md:px-10 flex md:flex-row flex-col gap-4 md:gap-10">
                <div className="left grow order-2 md:order-1">
                    {/* <div className="bg-neutral-300 h-48 w-full rounded-xl hidden md:block"></div> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.859710137811!2d77.49795689999999!3d28.783443899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf575e12ff84f%3A0x239f381b97bfaef0!2sSachin%20textiles!5e0!3m2!1sen!2sin!4v1742885780189!5m2!1sen!2sin"
                        className="h-48 w-full rounded-xl hidden md:block"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="md:mt-10 bg-neutral-100 p-4 md:p-10 md:text-xl w-full rounded-xl">
                        <p className="mb-2 md:mb-4">Mr. Sachin Goyal</p>
                        <p className="mb-2 md:mb-4">+918045801395</p>
                        <p>Bada Mandir, Chungi No. 3, Muradnagar,<br />
                            Near Bada Mandir, Murad Nagar Bazar,<br />
                            Muradnagar-201206, Uttar Pradesh, India</p>
                    </div>
                </div>

            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.859710137811!2d77.49795689999999!3d28.783443899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf575e12ff84f%3A0x239f381b97bfaef0!2sSachin%20textiles!5e0!3m2!1sen!2sin!4v1742885780189!5m2!1sen!2sin"
                    className="h-48 w-full rounded-xl md:hidden order-1"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

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