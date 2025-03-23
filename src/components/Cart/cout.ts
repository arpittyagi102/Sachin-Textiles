import { Dispatch } from 'redux';
import { clearCart } from '@/components/Cart/cartSlice';

export const processPayment = async (
    amount: string, 
    dispatch: Dispatch, 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    router: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    formdata: any
) => {
    try {
        console.log("formdata", formdata);
        const createOrderId = async (): Promise<string | null> => {
            try {
                const response = await fetch('/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        amount: parseFloat(amount) * 100, // convert amount to paise
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data.orderId || null;
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
                return null;
            }
        };

        const orderId = await createOrderId();
        if (!orderId) {
            alert("Failed to create order. Please try again.");
            return;
        }

        const options = {
            key: process.env.RAZORPAY_ID,
            amount: parseFloat(amount) * 100, // Razorpay expects amount in paise
            currency: 'INR',
            name: 'Sachin Textiles',
            description: 'Payment for products',    
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
                    // handle successful payment here
                    alert("Payment succeeded!");
                    dispatch(clearCart());
                    router.push('/');
                } else {
                    alert(res.message || "Payment verification failed.");
                }
            },
            prefill: {
                name: formdata.firstName + " " + formdata.lastName,  
                email: formdata.email, 
            },
            theme: {
                color: '#205781',
            },
        };

        //@ts-expect-error : Razorpay is added to windows by the script
        if (typeof window !== "undefined" && window.Razorpay) {
            //@ts-expect-error : Razorpay is added to windows by the script
            const paymentObject = new window.Razorpay(options);
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } else {
            alert("Razorpay script not loaded.");
        }
    } catch (error) {
        console.error("Error processing payment:", error);
    }
};
