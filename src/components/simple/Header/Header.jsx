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
                                <a href="#">Головна</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">Калькулятор</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">Візуальний калькулятор</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">Про нас</a>
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
