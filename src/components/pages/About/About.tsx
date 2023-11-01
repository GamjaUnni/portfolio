import gradient1 from "@/assets/images/gradient1.png";
import gradient2 from "@/assets/images/gradient2.png";
import "./About.scss";

const About = () => {
    return (
        <section className="about ">
            <div className="container">
                <div className="gradient_wrap1">
                    <img src={gradient1} />
                </div>

                <div className="about_txt">
                    <div className="line"></div>
                    <strong>안녕하세요,</strong>
                </div>
                <div className="about_txt">
                    <div className="line"></div>
                    <strong className="pad_508">
                        프론트엔드 개발자
                        <br />
                        박유나입니다.
                    </strong>
                    <div className="line arrow"></div>
                </div>

                <div className="gradient_wrap2">
                    <img src={gradient2} />
                </div>
                <div className="txt_wrap">
                    <p>
                        저는 3년동안 퍼블리셔로 일했습니다.
                        <br />
                        기획자, 디자이너, 개발자의{" "}
                        <strong>중간 다리 역할</strong>을 톡톡히 하며 협업을
                        진행 해왔습니다.
                        <br />
                        <br />
                        이제는 한발짝 더 나아가{" "}
                        <strong>프론트엔드 개발자</strong>의 길을 걸으며 크게
                        성장하고 싶습니다.
                        <br />
                        <br />
                        <strong>항상 배우려고 하는사람</strong>, 빠르게 변화하는
                        <strong>트렌드에 발을 맞출 수 있는 사람!</strong>
                        <br />
                        저와 함께 일해보고 싶지 않으신가요? 😊
                    </p>
                </div>
                <div className="marquee_txt">
                    Welcome to my portfolio. ㅡ
                    <span>Welcome to my portfolio. ㅡ</span>
                </div>
            </div>
        </section>
    );
};
export default About;
