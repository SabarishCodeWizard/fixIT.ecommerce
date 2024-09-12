import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Grid, Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AdressCard />
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={3}></OrderTraker>
            </div>

            <Grid className='space-y-5' container>

                {[1, 1, 1, 1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx=
                    {{ alignItems: "center", justifyContent: "space-between" }}>

                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men Slim pant and shirt</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                    <span>
                                        Color : Pink
                                    </span>
                                    <span>
                                        Size : M
                                    </span>

                                </p>
                                <p>Seller : linaria</p>
                                <p>1099</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>

                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-5xl' />
                            <span>Rate & Review Products</span>


                        </Box>
                    </Grid>

                </Grid>
                )}


            </Grid>

        </div>
    )
}

export default OrderDetails