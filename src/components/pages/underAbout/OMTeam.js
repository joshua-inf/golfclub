import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper";

// images for the management team
import image from '../../images/s.jpg'
import image1 from '../../images/21.jpg'
import image2 from '../../images/22.jpg'
import Info from "./info";


const Team = () => {

    return (
        <>
            <div className="m-3" style={{zIndex:'-1'}}>
                <div className="text-secondary" style={{ textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>
                    Our Management Team
                </div>
                <hr />
                <div className="p-4">
                    <div className="row">
                        <div className="col-12 col-md-5 p-3">
                            <div className="body">
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 7500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation, EffectCards]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className="img1" alt="" src={image} />
                                        <div style={{ position: 'absolute', bottom: '0', backgroundColor: 'rgba(1,1,1,0.5)', overflow: 'hidden' }} className="hiddentext px-2">
                                            <h6>name</h6>
                                            <p style={{ fontSize: '10px' }}>
                                                some stuff of stuff with about stuff on the isue Lorem ipsum
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img1" alt="" src={image1} />
                                        <div style={{ position: 'absolute', bottom: '0', backgroundColor: 'rgba(1,1,1,0.5)', overflow: 'hidden' }} className="hiddentext px-2">
                                            <h6>name</h6>
                                            <p style={{ fontSize: '10px' }}>
                                                some stuff of stuff with about stuff on the isue Lorem ipsum
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img1" alt="" src={image2} />
                                        <div style={{ position: 'absolute', bottom: '0', backgroundColor: 'rgba(1,1,1,0.5)', overflow: 'hidden' }} className="hiddentext px-2">
                                            <h6>name</h6>
                                            <p style={{ fontSize: '10px' }}>
                                                some stuff of stuff with about stuff on the isue Lorem ipsum
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-1 my-4">
                            <div className="h-100 rounded-3 border border-secondary px-3">
                                <Info />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team