import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/men_kurta';

const HomeSectionCarousel = () => {
    const carouselRef = useRef(null); // Reference to AliceCarousel instance

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    // Use carousel methods to slide
    const slidePrev = () => carouselRef.current?.slidePrev();
    const slideNext = () => carouselRef.current?.slideNext();

    return (
        <div className="relative px-4 lg:px-8 border">
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef} // Attach the carousel reference
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    infinite={false} // Optional: Disable infinite scrolling if needed
                />
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
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
