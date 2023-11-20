import gradient5 from "@/assets/images/gradient5.png";
import logo2 from "@/assets/images/logo2.png";

import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="gradient_wrap">
                    <img src={gradient5} />
                </div>
                <ul className="contact_txt">
                    <li>Thank you ㅡ</li>
                    <li>
                        <span>f</span>r Watching .
                    </li>
                </ul>

                <div className="nav_footer">
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

                <p className="rights_txt">
                    ⓒ 2023 Yuna Park All rights reserved.
                </p>
            </div>
        </section>
    );
};
export default Contact;
