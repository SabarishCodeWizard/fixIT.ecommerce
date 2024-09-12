import React from 'react'
import AdressCard from '../AdressCard/AdressCard'

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AdressCard />
            </div>

            
        </div>
    )
}

export default OrderDetails