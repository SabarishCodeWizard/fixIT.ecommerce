import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react'; // Consider using a different Button component if necessary
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className='relative px-4 lg:px-8 border'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                />
                <Button
                    className="z-50 transition transform hover:scale-105 hover:shadow-lg"
                    style={{ 
                        position: 'absolute', 
                        top: "8rem", 
                        right: "0rem", 
                        transform: "translateX(50%) rotate(90deg)", 
                        backgroundColor: "white", 
                        color: "black", 
                        borderRadius: "10%",
                        padding: "10px", // Adjust padding for a better look
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)" }} />
                </Button>
                <Button
                    className="z-50 transition transform hover:scale-105 hover:shadow-lg"
                    style={{ 
                        position: 'absolute', 
                        top: "8rem", 
                        left: "0rem", 
                        transform: "translateX(-50%) rotate(-90deg)", 
                        backgroundColor: "white", 
                        color: "black", 
                        borderRadius: "10%",
                        padding: "10px", // Adjust padding for a better look
                        
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)" }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel
