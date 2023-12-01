import LightRaySceneEllipse from '../../components/visual3D/LightRaySceneEllipse';
import LightRaySceneRectangle from '../../components/visual3D/LightRaySceneRectangle';
import { useState } from 'react';
import { Button } from 'antd';
import SideMenu from '../../components/smart/SideMenu/SideMenu';
import axios from 'axios';
import './VisualCalculatorPage.css';

const VisualCalculatorPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [data, setData] = useState({
        max_distance: 0,
        min_distance: 0,
        plume_width_module3: 0,
        plume_height_module3: 0,
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleFormSubmit = async (values) => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/3d',
                values,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            console.log('Успешно отправлено', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Произошла ошибка при отправке данных', error);
        }
    };

    return (
        <div className="visual">
            {/* <LightRaySceneEllipse /> */}
            <Button
                className="menu__btn"
                type="primary"
                onClick={toggleSidebar}
            >
                Open Calculator
            </Button>
            <SideMenu
                handleFormSubmit={handleFormSubmit}
                isOpen={sidebarOpen}
                onClose={toggleSidebar}
            />

            <LightRaySceneRectangle data={data} />
        </div>
    );
};

export default VisualCalculatorPage;
