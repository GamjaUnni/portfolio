import wave from "@/assets/video/wave.mp4";
import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <div className="video_wrap">
                <div className="video_bg">
                    <video className="wave" autoPlay loop muted playsInline>
                        <source src={wave} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container">
                <div className="text_wrap">
                    <strong>
                        Welcome to
                        <br />
                        my portfoli
                    </strong>
                    <div className="scroll">
                        <span className="hide">scroll</span>
                    </div>
                    <div className="circle"></div>
                </div>
            </div>
        </section>
    );
};
export default Home;
