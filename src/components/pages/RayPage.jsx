import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { RayCanvas } from '../canvas';
import { ErrorBoundary } from '../common';
import { Header, RayForm } from '../interface';
import { BarLoader, Block, Highlighter, SideMenu } from '../ui';

const RayPage = () => {
    const { calculations, calculationsLoadingStatus } = useSelector(state => state.calc);

    const [menuOpen, setMenuOpen] = useState(false);
    const [calcOption, setCalcOption] = useState(0);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [checked, setChecked] = useState(false);

    const toggleMenu = state => () => {
        setMenuOpen(state);
    };

    const handleCheckboxChange = event => {
        setChecked(event.target.checked);
    };

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
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
                    heading="Перебудувати промінь"
                >
                    <RayForm calcOption={calcOption} toggleCalcOption={setCalcOption} />
                </SideMenu>

                <Tooltip
                    title="Відкрити меню для розрахування променю "
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

                <Tooltip title="Налаштування візуалізації " placement="bottom-end" arrow>
                    <IconButton
                        onClick={handleOpenNavMenu}
                        size="small"
                        edge="end"
                        sx={{
                            position: 'absolute',

                            right: 0,
                            zIndex: 2,
                            marginRight: 2,
                            marginTop: 2,
                        }}
                    >
                        <SettingsRoundedIcon
                            fontSize="inherrit"
                            sx={{ fontSize: '30px' }}
                        />
                    </IconButton>
                </Tooltip>

                <Menu
                    id="settings-menu"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    MenuListProps={{
                        'aria-labelledby': 'settings-button',
                    }}
                >
                    <MenuItem
                        disableRipple
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            cursor: 'auto',
                            pr: 3.5,
                        }}
                    >
                        <Stack>
                            <FormControlLabel
                                sx={{ m: 0 }}
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                }
                                label="Wireframe"
                            />
                        </Stack>
                    </MenuItem>
                </Menu>

                <Block
                    padding="30px"
                    sx={{ position: 'absolute', bottom: 0, right: 0, mb: 2, mr: 2 }}
                >
                    <Typography>
                        Максимальна дистанція (м):
                        <Highlighter>
                            {calculations?.max_distance ?? 'N/A'}
                        </Highlighter>{' '}
                    </Typography>
                    <Typography>
                        Мінімальна дистанція (м):{' '}
                        <Highlighter>{calculations?.min_distance ?? 'N/A'}</Highlighter>{' '}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography>
                        Ширина плями (м):{' '}
                        <Highlighter>{calculations?.plume_width ?? 'N/A'}</Highlighter>{' '}
                    </Typography>
                    <Typography>
                        Висота плями (м):{' '}
                        <Highlighter>{calculations?.plume_height ?? 'N/A'}</Highlighter>{' '}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography>
                        Ширина перерізу (м):{' '}
                        <Highlighter>
                            {calculations?.plume_width_cut ?? 'N/A'}
                        </Highlighter>{' '}
                    </Typography>
                    <Typography>
                        Висота перерізу (м):{' '}
                        <Highlighter>
                            {calculations?.plume_height_cut ?? 'N/A'}
                        </Highlighter>{' '}
                    </Typography>
                </Block>

                <ErrorBoundary>
                    <RayCanvas wireframe={checked} />
                </ErrorBoundary>
            </Box>
            {calculationsLoadingStatus === 'loading' && <BarLoader />}
        </>
    );
};

export default RayPage;
