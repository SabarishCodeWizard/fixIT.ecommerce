import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react'; // Consider using a different Button component if necessary
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/men_kurta';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard  product={item} />)

    return (
        <div className='relative px-4 lg:px-8 border'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && <Button
                    className="z-50 transition transform hover:scale-105 hover:shadow-lg"
                    onClick={slideNext}
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
                </Button>}
                <Button
                    className="z-50 transition transform hover:scale-105 hover:shadow-lg"
                    onClick={slidePrev}
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
