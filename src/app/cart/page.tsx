"use client"
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export default function() {
    const cart = useSelector((state: RootState) => state.cart);
    console.log("cart", cart);
    
    return (
        <div>
            <h1 className='text-2xl p-5'>Cart</h1>
            <div className='bg-neutral-300 p-2 flex text-xl' >
                <table>
                    <thead>
                        <tr>
                            <th className='p-2 border'>Product</th>
                            <th className='p-2 border'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className='p-2 border'>{item.Product_Name}</td>
                                <td className='p-2 border'>{item.Price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}