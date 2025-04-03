import Script from 'next/script';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/components/Cart/cartSlice';
import { useRouter } from 'next/navigation';

export default function Checkout({ amount }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const createOrderId = async () => {
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(amount) * 100,
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const processPayment = async (e) => {
        e.preventDefault();
        try {
            const orderId: string = await createOrderId();
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
                amount: parseFloat(amount) * 100,          // ! IMPORTANT
                currency: 'INR',
                name: 'name',
                description: 'description',
                order_id: orderId,
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                handler: async function (response: any) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };

                    const result = await fetch('/api/verify', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const res = await result.json();
                    if (res.isOk) {
                        // handle successfull payment here
                        alert("payment succeed");
                        dispatch(clearCart());
                        router.push('/');

                    } else {
                        alert(res.message);
                    }
                },
                prefill: {
                    name: "Your Name",
                    email: "example@gmail.com",
                },
                theme: {
                    color: '#3399cc',
                },
            };
            // @ts-expect-error : Razorpay is added to windows by the script
            const paymentObject = new window.Razorpay(options);
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };

    return (<>
        <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

        <button className="bg-primary cursor-pointer text-white text-lg rounded-lg px-7 py-2 mt-5 ml-auto" onClick={processPayment}>
            Proceed to Checkout
        </button>
    </>)
}