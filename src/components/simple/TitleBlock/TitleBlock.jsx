import classNames from 'classnames';
import styles from './TitleBlock.module.css';

const TitleBlock = ({ text, additionalClass }) => {
    const titleClasses = classNames(styles.title, additionalClass);
    return (
        <div className={titleClasses}>
            <h2 className={styles.title__text}>{text}</h2>
        </div>
    );
};

export default TitleBlock;
