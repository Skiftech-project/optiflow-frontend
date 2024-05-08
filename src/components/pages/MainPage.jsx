import { Header } from '../interface';
import { Button } from '../ui';

const MainPage = () => {
    return (
        <>
            <Header>
                <Button link to="/register">
                    Реєстрація
                </Button>
            </Header>
            <div>Main Page</div>
        </>
    );
};

export default MainPage;
