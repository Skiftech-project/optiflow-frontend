import styles from './VisualCalculatorOutput.module.css';

const VisualCalculatorOutput = ({ data }) => {
    return (
        <div className={styles.output}>
            <div className={styles.output__item}>
                Максимальна дистанція (м): <span>{data.max_distance}</span>
            </div>

            <div className={styles.output__item}>
                Мінімальна дистанція (м): <span>{data.min_distance}</span>
            </div>

            <div className={styles.output__item}>
                Ширина плями (м): <span>{data.plume_width}</span>
            </div>

            <div className={styles.output__item}>
                Висота плями (м): <span>{data.plume_height}</span>
            </div>

            <div className={styles.output__item}>
                Ширина перерізу (м): <span>{data.plume_width_cut}</span>
            </div>

            <div className={styles.output__item}>
                Висота перерізу (м): <span>{data.plume_height_cut}</span>
            </div>
        </div>
    );
};

export default VisualCalculatorOutput;
