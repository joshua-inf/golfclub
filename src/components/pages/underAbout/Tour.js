import image from '../../images/24.jpg'
import image1 from '../../images/25.jpg'
import image2 from '../../images/golf-c.png'
import image3 from '../../images/26.jpg'

import video from '../../videos/1.mp4'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles1.css";

// import required modules
import { Navigation } from "swiper";
const Tour = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <div>
                <div className='p-5 text-center bg-image' style={{ background: `url(${image}) no-repeat center`, backgroundSize: 'cover', height: '50vh' }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>mazabuka golfclub</h1>
                                <h4 className='mb-3'>Course Tour</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3' style={{ textAlign: 'center' }}>
                        <img alt='' src={image2} width='150px' />
                        <hr />
                        <div>
                            <div className='row'>
                                <div className='col-12 col-lg-4'>
                                    <img alt='' src={image1} width='100%' />
                                </div>
                                <div className='col-12 col-lg-8 p-4'>
                                    <div>
                                        <h4 className='text-secondary'>some header here</h4>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                            . Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='text-secondary'>
                                <Swiper
                                    navigation={true}
                                    pagination={pagination}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <div className='p-5'>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-4'>
                                                        <img alt='' src={image3} width='50%' />
                                                    </div>
                                                    <div className='col-12 col-lg-8 p-3'>
                                                        <div>
                                                            <p>
                                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                                voluptatem accusantium doloremque lau
                                                            </p>
                                                        </div>
                                                        <div className=''>
                                                            <video width='100%' height='' controls>
                                                                <source src={video} type="video/mp4"/>
                                                            </video>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='p-5'>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-4'>
                                                        <img alt='' src={image3} width='50%' />
                                                    </div>
                                                    <div className='col-12 col-lg-8 p-3'>
                                                        <div>
                                                            <p>
                                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                                voluptatem accusantium doloremque lau
                                                            </p>
                                                        </div>
                                                        <div className=''>
                                                            <video width='100%' height='' controls>
                                                                <source src={video} type="video/mp4"/>
                                                            </video>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='p-5'>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-4'>
                                                        <img alt='' src={image3} width='50%' />
                                                    </div>
                                                    <div className='col-12 col-lg-8 p-3'>
                                                        <div>
                                                            <p>
                                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                                voluptatem accusantium doloremque lau
                                                            </p>
                                                        </div>
                                                        <div className=''>
                                                            <video width='100%' height='' controls>
                                                                <source src={video} type="video/mp4"/>
                                                            </video>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Tour