import FirstModule from '../../components/smart/FirstModule/FirstModule';
import TitleBlock from '../../components/simple/TitleBlock/TitleBlock';
import './CalculatorPage.css';

const CalculatorPage = () => {
    return (
        <>
            <div className="container">
                <div className="calculator__wrapper">
                    <TitleBlock text="Калькулятор розрахунку області передачі даних в оптичних системах" />
                    <FirstModule />
                </div>
            </div>
        </>
    );
};

export default CalculatorPage;
