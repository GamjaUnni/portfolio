import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visibleNavigation } from "@/recoil/commonAtom";
import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/logo2.png";
import "./Navigation.scss";

const Navigation = () => {
    const [visible, setVisible] = useRecoilState(visibleNavigation);
    useEffect(() => {
        if (visible) {
            document.body.className = "hidden";
        } else {
            document.body.className = "";
        }
    }, [visible]);

    return (
        <section className={visible ? "navigation active" : "navigation"}>
            <div className="container">
                <div className="nav_header">
                    <h2 className="logo">
                        <a>
                            <img src={logo} />
                        </a>
                    </h2>
                    <button
                        className="close_btn"
                        onClick={() => setVisible(false)}
                    >
                        <div className="hide">닫기</div>
                    </button>
                </div>
            </div>

            <ul className="menu_list">
                <li>
                    <a
                        href="#about"
                        className="container txt"
                        onClick={() => setVisible(false)}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#career"
                        className="container txt"
                        onClick={() => setVisible(false)}
                    >
                        Career
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="container txt"
                        onClick={() => setVisible(false)}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="container txt"
                        onClick={() => setVisible(false)}
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <div className="nav_footer container">
                <h3>
                    <a>
                        <img src={logo2} />
                    </a>
                </h3>
                <ul>
                    <li>
                        <strong>WRITE ME</strong>
                        <span>jeannelvn@gmail.com</span>
                    </li>
                    <li>
                        <strong>FOLLOW ME</strong>
                        <a href="#none">
                            <span className="Instagram">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <strong>COME SEE ME</strong>
                        <a href="#none">
                            <span className="github">GitHub</span>
                        </a>
                        <a href="#none">
                            <span className="velog">Velog</span>
                        </a>
                    </li>
                </ul>
            </div>

            <p className="rights_txt">ⓒ 2023 Yuna Park All rights reserved.</p>
        </section>
    );
};
export default Navigation;
