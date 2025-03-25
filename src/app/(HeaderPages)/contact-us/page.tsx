export default function Page() {
    return (
        <div className="w-screen py-4 px-10 flex gap-10">
            <div className="left grow">
                <div className="bg-neutral-300 h-48 w-full rounded-xl"></div>
                <div className="mt-10 bg-neutral-100 p-10 text-xl w-full rounded-xl">
                    <p className="mb-4">Mr. Sachin Goyal</p>
                    <p className="mb-4">+918045801395</p>
                    <p>Bada Mandir, Chungi No. 3, Muradnagar,<br/>
                    Near Bada Mandir, Murad Nagar Bazar,<br/>
                    Muradnagar-201206, Uttar Pradesh, India</p>
                </div>
            </div>

            <div className="right bg-neutral-100 border border-neutral-400 rounded-xl grow p-10 flex flex-col justify-end">
                <input type="text" className="text-lg w-full p-4 mb-4 bg-white border border-neutral-300 rounded"/>
                <textarea className="text-lg w-full p-4 mb-4 bg-white border border-neutral-300 rounded" rows="5"></textarea>
                <div className="flex justify-center">
                    <button className="bg-primary text-white px-6 py-2 mt-4 rounded">Enquire Now</button>
                </div>
            </div>
        </div>
    );
}