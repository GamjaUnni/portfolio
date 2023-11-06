import thumbnail1 from "@/assets/images/thumbnail/thumb_dx.png";
import thumbnail2 from "@/assets/images/thumbnail/thumb_korea.png";
import thumbnail3 from "@/assets/images/thumbnail/thumb_mincl.png";
import thumbnail4 from "@/assets/images/thumbnail/thumb_packerone.png";
import thumbnail5 from "@/assets/images/thumbnail/thumb_idol.png";
import thumbnail6 from "@/assets/images/thumbnail/thumb_intellivix.png";
import thumbnail7 from "@/assets/images/thumbnail/thumb_newssem.png";
import thumbnail8 from "@/assets/images/thumbnail/thumb_bi.png";
import thumbnail9 from "@/assets/images/thumbnail/thumb_woojin.png";
import thumbnail10 from "@/assets/images/thumbnail/thumb_ai.png";
import thumbnail11 from "@/assets/images/thumbnail/thumb_bank.png";
import thumbnail12 from "@/assets/images/thumbnail/thumb_compose.png";
import thumbnail13 from "@/assets/images/thumbnail/thumb_fta.png";
import thumbnail14 from "@/assets/images/thumbnail/thumb_laon.png";
import thumbnail15 from "@/assets/images/thumbnail/thumb_mimac.png";
import thumbnail16 from "@/assets/images/thumbnail/thumb_mpas.png";
import thumbnail17 from "@/assets/images/thumbnail/thumb_card.png";
import thumbnail18 from "@/assets/images/thumbnail/thumb_water.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Career.scss";
import { useRef } from "react";

const Career = () => {
    const slideSectionPrevBtn = useRef();
    const slideSectionNextBtn = useRef();

    return (
        <section className="career">
            <div className="container">
                <strong className="career_title">Career ㅡ</strong>
                <p className="career_desc">
                    퍼블리셔로 일하면서 만든 퍼블리싱 작업물입니다.
                </p>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={60}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl =
                        slideSectionPrevBtn.current;
                    swiper.params.navigation.nextEl =
                        slideSectionNextBtn.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                <SwiperSlide>
                    <img
                        src={thumbnail1}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail2}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail3}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail4}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail5}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail6}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail7}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail8}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail9}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail10}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail11}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail12}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail13}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail14}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail15}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail16}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={thumbnail17}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <img
                        src={thumbnail18}
                        className="slide_img"
                        alt="슬라이드 이미지"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default Career;
