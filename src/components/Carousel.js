import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/autoplay"

import "swiper/css/navigation"
// import "../styles.css"

import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"

// import img1 from "../assets/img/img1.jpg"
// import img2 from "../img/img2.jpg"
// import img3 from "../img/img3.jpg"
// import img4 from "../img/img4.jpg"
// import img5 from "../img/img5.jpg"
// import img6 from "../img/img6.jpg"
// import img7 from "../img/img7.jpg"
// import img8 from "../img/img8.jpg"
// import img9 from "../img/img9.jpg"
// import img10 from "../img/img10.jpg"

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay])

export const Carousel = () => {


    return (


        <div className="container">
            <div className="title_wrapper">
                <div className="title_">
                    <span>
                        OUR GALLERY

                    </span>
                </div>
            </div>
            <div className="swipper-wrapper swipper">
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    coverfloweffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://tedxwinterpark.com/wp-content/uploads/2020/05/TEDxEvento-682b9876.jpg" alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.dribbble.com/users/2302505/screenshots/6128239/tedx1.png?compress=1&resize=400x300" alt="img2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.ideasonstage.com/tedx-speaker-guide/tedx-speaker.jpg" alt="img3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://metro.co.uk/wp-content/uploads/2018/03/miranda-kane-2.jpg?quality=90&strip=all&zoom=1&resize=480%2C304" alt="img4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1365,w_2047,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/4670094012_839157263b_k_ypqmfm.jpg" alt="img5" />
                    </SwiperSlide>
                    
                </Swiper>

            </div>
        </div>

    )
}