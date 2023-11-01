import logo from "@/assets/images/logo.png";
import "./Header.scss";

const Header = () => {
    return (
        <div className="container">
            <header>
                <h1 className="logo">
                    <a>
                        <img src={logo} />
                    </a>
                </h1>
                <button className="menu_btn">
                    <div className="hide">메뉴</div>
                </button>
            </header>
        </div>
    );
};
export default Header;
