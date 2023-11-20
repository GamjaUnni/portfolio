import prrjectImg1 from "@/assets/images/img_plantopia_mockup.png";
import prrjectImg2 from "@/assets/images/img_rabbit_mockup.png";

import "./Projects.scss";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <strong className="projects_title">Project ㅡ</strong>
                <p className="projects_desc">리액트로 작성한 작업물입니다.</p>

                <ul className="projects_wrap">
                    <li>
                        <img
                            className="projects_img"
                            src={prrjectImg1}
                            alt="플랜토피아"
                        />
                        <div className="projects_container">
                            <ul>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>PWA</li>
                                <li>App</li>
                            </ul>
                            <span>식물 통합 관리 서비스</span>
                            <strong className="projects_txt plantopia">
                                Plantopia
                            </strong>
                            <p>
                                서비스에 대한 설명을 적어주세요. 플랜토피아는
                                이런저런 기능을 가진 서비스입니다.
                                <br />
                                서비스에 대한 설명을 적어주세요. 플랜토피아는
                                이런저런 기능을 가진 서비스입니다.
                                <br />
                                퍼블리싱과 프론트개발을 담당했으며 이런저런 기능
                                구현을 했습니다.
                            </p>
                            <a href="#none">Go to Project</a>
                        </div>
                    </li>

                    <li className="reverse">
                        <div className="projects_container right">
                            <ul>
                                <li>React</li>
                                <li>책 쇼핑몰</li>
                                <li>Web</li>
                                <li>express</li>
                                <li>Node.js</li>
                            </ul>
                            <span>책을 통해서 사람을 연결하다</span>
                            <strong className="projects_txt rabbit">
                                토끼책방
                            </strong>
                            <p>서비스에 대한 설명 입니다. </p>
                            <a href="#none">Go to Project</a>
                        </div>
                        <img
                            className="projects_img"
                            src={prrjectImg2}
                            alt="토끼책방"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Projects;
