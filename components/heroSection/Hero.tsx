"use client"

import {
    Carousel,
} from "../materialTailwind/MaterialComponents";
import './Hero.css'
import { slides, circles } from './Data'
import Slide from "./Slide";
import Circle from "./Circle";


const Hero = () => {
    return (
        <div className='relative'>
            <Carousel
                autoplay
                navigation={() => ""}
                loop
                className='carousel'
            >
                {/* Slides  */}
                {
                    slides?.map((slide, index) => (
                        <Slide
                            key={index}
                            imgUrl={slide.imgUrl}
                            title={slide.title}
                            description={slide.description}
                            btn_1_Text={slide.btn_1_Text}
                            btn_2_Text={slide.btn_2_Text}
                        />
                    ))
                }
            </Carousel>

            {/* Circles  */}
            <div className="absolute lg:bottom-8 left-2/4 z-50 hidden xl:flex -translate-x-2/4 gap-3">
                {
                    circles?.map((circle, index) => (
                        <Circle
                            key={index}
                            link={circle.link}
                            imgUrl={circle.imgUrl}
                            text={circle.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Hero