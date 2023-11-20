import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__body}>
                    <a
                        href="#"
                        className={styles.header__logo}
                    >
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </a>

                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item}>
                                <Link to="/main">Головна</Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to="/">Калькулятор</Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to="/visual">Візуальний калькулятор</Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to="/about">Про нас</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.additional}>
                        <div className={styles.additional__lang}>UA</div>
                        <button className={styles.additional__btn}>
                            Рєєстрація
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
