import FirstModule from '../../components/smart/FirstModule/FirstModule';
import TitleBlock from '../../components/simple/TitleBlock/TitleBlock';
import './CalculatorPage.css';

const CalculatorPage = () => {
    return (
        <>
            <div className="container">
                <TitleBlock text="Калькулятор розрахунку області передачі даних в оптичних системах" />
                <FirstModule />
            </div>
        </>
    );
};

export default CalculatorPage;
