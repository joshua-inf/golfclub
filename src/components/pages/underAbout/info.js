import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Info() {
    return (
        <>
            <div className="body info" style={{zIndex:'-1'}}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 7500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="text-secondary">
                            <p>
                            “One of the most fascinating things about golf is how it reflects the cycle of life. No matter what you shoot – the next day you have to go back to the first tee and begin all over again and make yourself into something.” -Peter Jacobsen
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-secondary">
                            <p>
                            “A good golfer has the determination to win and the patience to wait for the breaks.” -Gary Player
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-secondary">
                            <p>
                            “Golf is a compromise between what your ego wants you to do, what experience tells you to do, and what your nerves let you do.” -Bruce Crampton
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    );
}
