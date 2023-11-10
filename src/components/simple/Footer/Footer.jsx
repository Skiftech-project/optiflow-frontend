import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__body}>
                    <div className={styles.footer__copyright}>
                        © Optiflow Skiftech-Project
                    </div>
                    <nav className={styles.footer__menu}>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__item}>
                                <a href="#">Головна</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a href="#">Калькулятор</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a href="#">Візуальний калькулятор</a>
                            </li>
                            <li className={styles.footer__item}>
                                <a href="#">Про нас</a>
                            </li>
                            <li className={styles.footer__item}>
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
