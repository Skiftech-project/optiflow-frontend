import './Header.css';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <a
                        href="#"
                        className="header__logo"
                    >
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </a>

                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#">Головна</a>
                            </li>
                            <li className="menu__item">
                                <a href="#">Калькулятор</a>
                            </li>
                            <li className="menu__item">
                                <a href="#">Візуальний калькулятор</a>
                            </li>
                            <li className="menu__item">
                                <a href="#">Про нас</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__additional additional">
                        <div className="additional__lang">UA</div>
                        <button className="additional__btn">Рєєстрація</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
