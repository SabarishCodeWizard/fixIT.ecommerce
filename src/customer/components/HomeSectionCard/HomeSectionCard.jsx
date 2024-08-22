import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className="h-[13rem] w-[10rem]">
                <img className='object-cover object-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imagjg47g7cxhg3-bb.jpeg?q=70" alt="" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Redux</h3>
                <p className='mt-2 text-5m text-gray-500'>Men soild pure cotton straight kurta</p>

            </div>


        </div>
    )
}

export default HomeSectionCard