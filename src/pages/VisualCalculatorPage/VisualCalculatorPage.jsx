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
        plume_width: 0,
        plume_height: 0,
        plume_width_cut: 0,
        plume_height_cut: 0,
    });
    const [selectPlumeForm, setSelectPlumeForm] = useState('rectangle');

    const handleSelectChange = (value) => {
        setSelectPlumeForm(value);
    };


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
            <Button
                className="menu__btn"
                type="primary"
                onClick={toggleSidebar}
            >
                Open Calculator
            </Button>
            <SideMenu
                handleFormSubmit={handleFormSubmit}
                handleSelectChange={handleSelectChange}
                isOpen={sidebarOpen}
                onClose={toggleSidebar}
            />

            {selectPlumeForm === 'rectangle' && (
                <LightRaySceneRectangle data={data} />
            )}
            {selectPlumeForm === 'ellipse' && (
                <LightRaySceneEllipse data={data} />
            )}
        </div>
    );
};

export default VisualCalculatorPage;
