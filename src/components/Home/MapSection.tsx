export default function MapSection() {
    return (
        <div className="MapSection flex flex-col md:flex-row gap-8 items-top justify-between my-8">
            <div className="md:ml-8 flex-grow-1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.859710137811!2d77.49795689999999!3d28.783443899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf575e12ff84f%3A0x239f381b97bfaef0!2sSachin%20textiles!5e0!3m2!1sen!2sin!4v1742885780189!5m2!1sen!2sin"
                    className="rounded-2xl px-4 w-full h-56 md:w-auto md:h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className=" flex flex-col justify-between mx-2 p-1 md:p-4 px-6 md:mx-12 bg-neutral-100">
                <p className="md:text-lg text-neutral-700" style={{"textAlign": "justify"}}>
                    As we are a hospital supplier company, we remain at the forefront of innovation
                    by employing the latest research technology. This commitment allows us to source and deliver the most advanced medical products and solutions to 
                    healthcare institutions. Our focus on staying up-to-date with the latest 
                    advancements ensures that our clients receive state-of-the-art equipment, 
                    contributing to better patient care and the overall efficiency of medical facilities.
                </p>

                <div>
                    <h1 className="text-xl md:text-2xl font-bold mt-4 md:mb-2 text-cyan-600">Sachin Goyal</h1>
                    <p className="mb-4 md:text-lg text-neutral-500">Founder, CEO of <span className="font-bold">Sachin Textiles</span></p>
                </div>
            </div>
        </div>
    )
}