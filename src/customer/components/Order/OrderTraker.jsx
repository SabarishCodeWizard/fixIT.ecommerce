import React from 'react'
import { Stepper } from '@mui/material'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out Of Delivery",
    "Delivered"
]


const OrderTraker = ({activeStep}) => {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>

            </Stepper>
        </div>
    )
}

export default OrderTraker