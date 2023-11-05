import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__body">
                    <div className="footer__copyright">
                        © Optiflow Skiftech-Project
                    </div>
                    <nav className="footer__menu">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#">Головна</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Калькулятор</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Візуальний калькулятор</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Про нас</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Допомога</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
