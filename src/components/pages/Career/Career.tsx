import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Career.scss";

const Career = () => {
    return (
        <section className="career">
            <div className="container">
                <strong className="career_title">Career ㅡ</strong>
                <p className="career_desc">
                    퍼블리셔로 일하면서 만든 퍼블리싱 작업물입니다.
                </p>
            </div>
        </section>
    );
};
export default Career;
