import './OutputBlock.css';
const OutputBlock = () => {
    return (
        <div className="output">
            <div className="calculations">
                <div className="calculations__item">
                    Кут ширини:
                    <span></span>
                </div>
                <div className="calculations__item">
                    Кут висоти:
                    <span></span>
                </div>
                <div className="calculations__item">
                    Максимальна площа:
                    <span></span>
                </div>
                <div className="calculations__item">
                    Максимальна дистанція:
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default OutputBlock;
