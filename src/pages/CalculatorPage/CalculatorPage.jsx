import FirstModule from '../../components/smart/FirstModule/FirstModule';
import TitleBlock from '../../components/simple/TitleBlock/TitleBlock';
import './CalculatorPage.css';

const CalculatorPage = () => {
    return (
        <>
            <TitleBlock text="Калькулятор розрахунку області передачі даних в оптичних системах" />
            <FirstModule />
        </>
    );
};

export default CalculatorPage;
