import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data,sectionName}) => {
    const carouselRef = useRef(null); // Reference to AliceCarousel instance
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    const slidePrev = () => {
        if (activeIndex > 0) {
            carouselRef.current?.slidePrev();
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - 1) {
            carouselRef.current?.slideNext();
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Sync activeIndex on slide change
    const handleSlideChanged = ({ item }) => setActiveIndex(item);

    return (
        <div className="relative px-4 lg:px-8 border">
            <h1 className="text-2xl font-extrabold text-gray-950 py-5">{sectionName}</h1>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef} // Attach the carousel reference
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    infinite={false} // Optional: Disable infinite scrolling if needed
                    activeIndex={activeIndex}
                    onSlideChanged={handleSlideChanged}
                />
                {/* Next button: Show only if not on the last set of items */}
                {activeIndex < items.length - 5 && (
                    <Button
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
                            padding: "10px",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)" }} />
                    </Button>
                )}
                {/* Prev button: Show only if not on the first item */}
                {activeIndex > 0 && (
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
                            padding: "10px",
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon style={{ transform: "rotate(90deg)" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
