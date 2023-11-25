import FirstModule from '../../components/smart/FirstModule/FirstModule';
import TitleBlock from '../../components/simple/TitleBlock/TitleBlock';
import './CalculatorPage.css';

const CalculatorPage = () => {
    return (
        <>
            <div className="container">
                <div className="calculator__wrapper">
                    <FirstModule />
                </div>
            </div>
        </>
    );
};

export default CalculatorPage;
