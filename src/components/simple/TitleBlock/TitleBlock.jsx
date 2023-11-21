import styles from './TitleBlock.module.css';

const TitleBlock = ({ text, titleWidth }) => {
    const titleStyle = titleWidth ? { width: titleWidth } : null;

    return (
        <div
            className={styles.title}
            style={titleStyle}
        >
            <h2 className={styles.title__text}>{text}</h2>
        </div>
    );
};

export default TitleBlock;
