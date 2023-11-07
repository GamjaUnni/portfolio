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
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import "./Career.scss";

const Career = () => {
    const slideSectionPrevBtn = useRef<HTMLDivElement>(null);
    const slideSectionNextBtn = useRef<HTMLDivElement>(null);

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
                slidesPerGroup={4}
                spaceBetween={60}
                mousewheel={true}
                speed={1600}
                pagination={{
                    type: "fraction",
                    formatFractionCurrent: (number: number) => {
                        console.log("formatFractionCurrent" + number);
                        return number;
                    },
                    formatFractionTotal: (number: number) => {
                        console.log("formatFractionTotal" + number);
                        return number;
                    },
                    renderFraction: (
                        currentClass: string,
                        totalClass: string
                    ) => {
                        return `<div class="pagination_container">
                                    <span class=${currentClass}></span>
                                    <span class="pagenation_sep"></span>
                                    <span class=${totalClass}></span>
                                </div>`;
                    },
                }}
                navigation={true}
                modules={[Mousewheel, Pagination, Navigation]}
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
                    <a href="#none">
                        <img
                            src={thumbnail1}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            KT - 요즘동네 (DX Platform)
                        </p>
                        <ul className="slide_tag">
                            <li>App</li>
                            <li>21.04 ~ 21.12</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail2}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            한국부동산원 - 가격정보 통합시스템
                        </p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>chart.js</li>
                            <li>21.08 ~ 21.10</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail3}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">KT - 민클</p>
                        <ul className="slide_tag">
                            <li>App</li>
                            <li>NFT</li>
                            <li>22.07 ~ 22.12</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail4}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            서브원 - 패커원(Packer One)
                        </p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>쇼핑몰</li>
                            <li>FO · BO</li>
                            <li>22.02 ~ 22.10</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail5}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">LG U+ - 아이돌 플러스</p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            <li>22.04 ~ 22.08</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail6}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">인텔리빅스 - 홈페이지</p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            <li>fullPage</li>
                            <li>22.01 ~ 22.04</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail7}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">KT alpha - 뉴쌤</p>
                        <ul className="slide_tag">
                            <li>적응형</li>
                            <li>PC · Mobile · BO</li>
                            <li>21.03 ~ 23.01</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail8}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            LG U+ - Business Intelligence
                        </p>
                        <ul className="slide_tag">
                            <li>BO</li>
                            <li>chart.js</li>
                            <li>20.06 ~ 20.09</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail9}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            우진 트레이딩 - Virtual Showroom
                        </p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>AR</li>
                            <li>20.08 ~ 20.09</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail10}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">LG U+ - AI쏙쏙</p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>BO</li>
                            <li>20.09 ~ 21.09</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail11}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            IBK - 금융권공동채용박람회
                        </p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            <li>21.04 ~ 21.09</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail12}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            피코노스아시아 - Compose Camp
                        </p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            {/* <li>Responsive Image map</li> */}
                            <li>22.09 ~ 22.10</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail13}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            한국무역협회 - FTA 통합플랫폼
                        </p>
                        <ul className="slide_tag">
                            <li>적응형</li>
                            <li>PC · Mobile</li>
                            <li>20.07 ~ 20.10</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail14}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">KT - 라온 NFT 홈페이지</p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>NFT</li>
                            <li>22.11 ~ 22.12</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail15}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">대성마이맥 - LIVE Class</p>
                        <ul className="slide_tag">
                            <li>적응형</li>
                            <li>PC · Mobile</li>
                            <li>20.11 ~ 21.06</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail16}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">서울대학교 KMPC - MPAS</p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            <li>20.11 ~ 20.12</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#none">
                        <img
                            src={thumbnail17}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            코오롱 글로벌, 코오롱 아우토, 롤스로이스 - 모바일
                            명함
                        </p>
                        <ul className="slide_tag">
                            <li>Responsive Web</li>
                            <li>20.11 ~ 21.06</li>
                        </ul>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="mar_95">
                    <a href="#none">
                        <img
                            src={thumbnail18}
                            className="slide_img"
                            alt="슬라이드 이미지"
                        />
                        <p className="slide_title">
                            대교 - 천년동안 심층수 쇼핑몰
                        </p>
                        <ul className="slide_tag">
                            <li>Web</li>
                            <li>20.04 ~ 20.07</li>
                        </ul>
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default Career;
