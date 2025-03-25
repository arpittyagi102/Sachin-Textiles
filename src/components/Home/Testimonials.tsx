export default function Testimonials(){
    return (
        <section className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-center">What Clients Say?</h1>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-6">
                {DATA.map((item, index) => (
                    <div key={index} className="md:w-[27%] bg-[#AFC9D2] p-5 rounded-lg">
                        <div className="flex">
                            {[...Array(Math.floor(item.rating))].map((_, index) => (
                                <svg key={index} width="20" height="20" className="mr-1 mt-1" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.6162 2.28238C16.2478 0.511439 18.7522 0.511439 19.3838 2.28238L22.0779 9.83695C22.3619 10.6334 23.1161 11.1652 23.9617 11.1652H32.2541C34.2363 11.1652 35.011 13.7387 33.3581 14.8329L26.9795 19.0553C26.2125 19.563 25.8907 20.5284 26.1996 21.3948L28.7098 28.4334C29.3554 30.2438 27.3247 31.8339 25.722 30.773L18.604 26.0611C17.9347 25.618 17.0653 25.618 16.396 26.0611L9.27799 30.7729C7.6753 31.8339 5.64462 30.2438 6.29023 28.4334L8.80036 21.3948C9.10932 20.5284 8.78752 19.563 8.02052 19.0553L1.64191 14.8329C-0.0109549 13.7387 0.763677 11.1652 2.74587 11.1652H11.0383C11.8839 11.1652 12.6381 10.6334 12.9221 9.83695L15.6162 2.28238Z" fill="#FF8E09"/>
                                </svg>
                            ))}
                            {item.rating % 1 !== 0 && (
                                <svg width="20" height="20" className="scale-[1.7] ml-1" viewBox="0 0 63 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6162 20.2824C21.2478 18.5114 23.7522 18.5114 24.3838 20.2824L27.0779 27.8369C27.3619 28.6334 28.1161 29.1652 28.9617 29.1652H37.2541C39.2363 29.1652 40.011 31.7387 38.3581 32.8329L31.9795 37.0553C31.2125 37.563 30.8907 38.5284 31.1996 39.3948L33.7098 46.4334C34.3554 48.2438 32.3247 49.8339 30.722 48.773L23.604 44.0611C22.9347 43.618 22.0653 43.618 21.396 44.0611L14.278 48.7729C12.6753 49.8339 10.6446 48.2438 11.2902 46.4334L13.8004 39.3948C14.1093 38.5284 13.7875 37.563 13.0205 37.0553L6.64191 32.8329C4.98905 31.7387 5.76368 29.1652 7.74587 29.1652H16.0383C16.8839 29.1652 17.6381 28.6334 17.9221 27.8369L20.6162 20.2824Z" fill="#FF8E09"/>
                                    <rect x="11" y="27.209" width="25" height="36" transform="rotate(-47.3386 11 27.209)" fill="#AFC9D2"/>
                                </svg>
                            )}
                        </div>

                        <p className="text-black mt-5 text-[18px] leading-6 ">{item.text}</p>
                        <div className="flex mt-5 bg-opacity-50 text-center items-center gap-3">
                            <img src={item.image} alt={item.name} height={50} width={50} className="aspect-square object-cover rounded-xl" />
                            <h3 className="font-bold text-white text-lg">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const DATA = [{
        "name": "Sia Gupta",
        "image": "/images/Home/Testimonials/c1.png",
        "text": "Placed a bulk order for our business, and everything was delivered on time with top-notch quality.",
        "rating": 5,
    }, {
        "name": "Adi Oberoi",
        "image": "/images/Home/Testimonials/c2.png",
        "text": "The fabric quality is outstanding! Soft, durable and perfect for our needs. Highly recommended!",
        "rating": 4,
    }, {
        "name": "Abhishek Mittal",
        "image": "/images/Home/Testimonials/c3.png",
        "text": "Sachin Textiles offers premium fabrics at great prices. The affordability doesn't compromise the quality.",
        "rating": 4.5,
    }
]