import styles from './TitleBlock.module.css';

const TitleBlock = ({ text }) => {
    return (
        <div className={styles.title}>
            <h2 className={styles.title__text}>{text}</h2>
        </div>
    );
};

export default TitleBlock;
