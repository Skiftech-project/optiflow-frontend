import { HashLoader } from 'react-spinners';

import './Preloader.css';

const Preloader = () => {
    return (
        <div className="page">
            <div className="loader">
                <div className="loader__spinner">
                    <HashLoader color="#1e55b3" />
                    <div className="loader__title">Optiflow</div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
