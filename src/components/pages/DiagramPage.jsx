import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Box, IconButton, Tooltip } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useNotification } from 'src/core/hooks';

import { DiagramCanvas } from '../canvas';
import { ErrorBoundary } from '../common';
import { DiagramForm, Header } from '../interface';
import { BarLoader, Notification, SideMenu } from '../ui';

//TODO: rewrite this component
const DiagramPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [discrette, setDiscrette] = useState(4);
    const [power, setPower] = useState(1);
    const [sensitivity, setSensitivity] = useState(0.015);
    const [type, setType] = useState('log');

    const { isNotified, showNotification, closeNotification } = useNotification();
    const { dataLoadingStatus } = useSelector(state => state.diagram);
    const methods = useForm({
        defaultValues: { sensitivity: 0.015, power: 1, discrette: 4 },
        mode: 'all',
    });

    const toggleMenu = state => () => {
        setMenuOpen(state);
    };

    useEffect(() => {
        showNotification('info');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loader = dataLoadingStatus === 'loading' && <BarLoader />;

    return (
        <>
            <FormProvider {...methods}>
                <Header position="fixed" />
                <Box
                    component="main"
                    sx={{
                        height: `calc(100vh - 64px)`,
                        marginTop: '64px',
                        position: 'relative',
                    }}
                >
                    <SideMenu
                        open={menuOpen}
                        onClose={toggleMenu(false)}
                        heading="Створити діаграму спрямованості"
                    >
                        <DiagramForm
                            type={type}
                            discrette={discrette}
                            power={power}
                            sensitivity={sensitivity}
                            setDiscrette={setDiscrette}
                            setPower={setPower}
                            setType={setType}
                            setSensitivity={setSensitivity}
                        />
                    </SideMenu>

                    <Tooltip
                        title="Відкрити меню побудови діаграми "
                        placement="bottom-end"
                        arrow
                    >
                        <IconButton
                            onClick={toggleMenu(true)}
                            size="small"
                            edge="end"
                            sx={{
                                position: 'absolute',
                                zIndex: 2,
                                marginLeft: 2,
                                marginTop: 2,
                            }}
                        >
                            <KeyboardDoubleArrowRightIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    <ErrorBoundary>
                        <DiagramCanvas
                            discrette={discrette}
                            power={power}
                            sensitivity={sensitivity}
                            type={type}
                        />
                    </ErrorBoundary>
                </Box>
            </FormProvider>

            <Notification
                title="Підказка"
                open={isNotified('info')}
                onClose={closeNotification('info')}
                autoHideDuration={10000}
                key="info"
            >
                Завантажте файл с даними, щоб візуалізувати діаграму. <br />
                Для цього <b>натисніть кнопку</b> або просто <b>перетягніть файл</b> у
                зону меню.
            </Notification>

            {loader}
        </>
    );
};

export default DiagramPage;
