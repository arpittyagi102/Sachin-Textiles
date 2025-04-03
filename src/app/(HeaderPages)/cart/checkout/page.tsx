"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { processPayment } from '@/components/Cart/cout';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Script from "next/script";

export default function CheckoutForm() {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state: RootState) => state.cart);
    const subTotal = cart.reduce((acc, product) => acc + (parseInt(product.Price.split('/')[0] || "0") * product.quantity), 0);

    const [formData, setFormData] = useState<CheckoutFormData>({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        addressLine1: "",
        addressLine2: "",
        phoneNumber: "",
        email: "",
    });

    const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: Partial<CheckoutFormData> = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
        if (!formData.addressLine1) newErrors.addressLine1 = "Street address is required.";
        if (!formData.addressLine2) newErrors.addressLine2 = "Street address is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.pincode) newErrors.pincode = "Pincode is required.";
        if (!formData.state) newErrors.state = "State is required.";
        if (!formData.country) newErrors.country = "Country is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
        }
        processPayment( subTotal.toString(), dispatch, router, formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border-2 border-neutral-300 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className={labelClasses}>First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                {/* Company Name */}
                <div>
                    <label htmlFor="companyName" className={labelClasses}>Company Name (optional)</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Country */}
                    <div>
                        <label htmlFor="country" className={labelClasses}>Country</label>
                        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>

                    {/* State */}
                    <div>
                        <label htmlFor="state" className={labelClasses}>State </label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                    </div>
                </div>

                {/* City and Pincode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className={labelClasses}>City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>

                    {/* Pincode */}
                    <div>
                        <label htmlFor="pincode" className={labelClasses}>Pincode</label>
                        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} pattern="^\d{6}$" required
                            className={inputClasses}
                        />
                        {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                    </div>
                </div>


                <div>
                    <label htmlFor="addressLine1" className={labelClasses}>Street Address</label>
                    <input type="text" id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required
                        placeholder="House No. , Street Name"
                        className={inputClasses}
                    />
                    <input type="text" id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleChange}
                        placeholder="House No. , Street Name"
                        className={inputClasses}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phoneNumber" className={labelClasses}>Phone Number</label>
                        <div className="flex items-center">
                            <span className="px-2 py-1 md:px-4 md:py-3 md:mt-1 md:text-lg rounded-md bg-neutral-200 text-neutral-700 rounded-e-none border-r-2 border-neutral-400">+91</span>
                            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="^\d{10}$" required title="Phone number must be exactly 10 digits."
                                className={`${inputClasses} rounded-s-none`}
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={labelClasses}>Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                            className={inputClasses}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>

                <button type="submit" className="bg-primary cursor-pointer text-white text-lg rounded-lg px-7 py-2 mt-5 ml-auto">
                    Proceed to Checkout
                </button>
            </form>

            <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
        </div>
    );
};

const labelClasses = "block text-sm font-medium text-gray-700"
const inputClasses = "w-full px-2 py-1 md:px-4 md:py-3 md:mt-1 md:text-lg rounded-md bg-neutral-200 focus:outline-none"

// Types for the form
interface CheckoutFormData {
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    state: string;
    city: string;
    pincode: string;
    addressLine1: string;
    addressLine2: string;
    phoneNumber: string;
    email: string;
}