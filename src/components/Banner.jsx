import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider1 from "../assets/images/slider1.png"
import Slider2 from "../assets/images/slider2.png"
import Slider3 from "../assets/images/slider3.png"
import Slider4 from "../assets/images/slider4.png"
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <section className="text-center text-3xl font-bold mb-20 pt-[150px]">
                <Typewriter
                    options={{
                        strings: ['Welcome To Volunteer Hub'],
                        autoStart: true,
                        loop: true,
                        delay: 75, // Typing speed
                        deleteSpeed: 50, // Speed of deleting characters
                    }}
                />
            </section>
            <section>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <img className='lg:h-[400px] h-[200px] w-[100%]' src={Slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[400px] h-[200px] w-[100%]' src={Slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[400px] h-[200px] w-[100%]' src={Slider3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[400px] h-[200px] w-[100%]' src={Slider4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Banner;