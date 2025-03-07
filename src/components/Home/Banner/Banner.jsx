import React from 'react'
import "./Banner.css"
import img1 from "../../../assets/Images/still-life-medical-tools.png"
import img2 from "../../../assets/Images/product-3.png"
// src/assets/black_headphones.png

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

const Banner = () => {
    return(
        <div className="banner_main">
            <Swiper
            scrollbar={{
                hide: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="container-fluid banner_1 py-5">
                    <div className="container gx-0">
                        <div className="row gx-0 align-items-center">
                            <div className="col-md-12 col-lg-6"
                                // data-aos="fade-right"
                                // data-aos-duration="1000"
                                // data-aos-easing="ease-in-out"
                            >
                                <div className="banner_col1 pt-md-4">
                                    <h6 className="Main_Label pb-3"> 
                                        <i className="fa-solid fa-star"></i> Top Products Of The Month</h6>
                                    <h1>
                                        Orthodontic Instruments
                                    </h1>
                                    <p className="py-3">
                                    Precision. Performance. Perfection. Explore our premium range of Orthodontic Instruments, crafted for accuracy and durability. Elevate your dental practice with tools designed for seamless orthodontic treatments. Shop now for the best in class!                                    </p>
                                    <div className="banner_btns">
                                        <button className="main_btn">Shop Now</button>
                                     </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6"
                                    // data-aos="fade-left"
                                    // data-aos-duration="1000"
                                    // data-aos-easing="ease-in-out"
                            >
                                <div className="banner_col2">
                                    <img src={img1} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="container-fluid banner_2 py-5 ">
                <div className="container gx-0">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-12 col-lg-6 order-md-2"
                                // data-aos="fade-right"
                                // data-aos-duration="1000"
                                // data-aos-easing="ease-in-out"
                            >
                            <div className="banner_col1 pt-md-4">
                                    <h6 className="Main_Label pb-3"> 
                                        <i className="fa-solid fa-star"></i> Top Products Of The Month</h6>
                                    <h1>
                                        Dental Chair
                                    </h1>
                                    <p className="py-3">
                                    Experience Comfort & Innovation 🦷✨ Upgrade your dental practice with our ergonomically designed Dental Chair, built for precision, patient comfort, and seamless functionality. Enhance efficiency with advanced features tailored for modern dentistry.
                                    </p>
                                    <div className="banner_btns">
                                        <button className="main_btn">Shop Now</button>
                                     </div>
                                </div>
                        </div>
                        <div className="col-md-12 col-lg-6 order-md-1"
                                    // data-aos="fade-left"
                                    // data-aos-duration="1000"
                                    // data-aos-easing="ease-in-out"
                        >
                            <div className="banner_col1">
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </SwiperSlide>
            {/* <SwiperSlide><div className="container-fluid Hero Hero2">
                <div className="container gx-0">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-6 order-md-2">
                            <div className="Hero_col1">
                                <h1>Get Healthy Body With the Perfect Exercises</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus minima illo ipsum, itaque voluptate praesentium dolore quaerat! Cum, excepturi perspiciatis iure laudantium cumque illo assumenda magni beatae saepe numquam!</p>
                                <div className="hero_btns">
                                    <button className="btn1 btn0">Get Started</button>
                                    <button className="play_btn">
                                        <img src={icon1} alt="play" />
                                        Watch Videos
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <div className="Hero2_col2">
                                <img src={img1} alt="hero" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
            </div></SwiperSlide> */}
        </Swiper>
        </div>
        
    )

}

export default Banner
