import PropTypes from 'prop-types';

import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const TemplateTable = ({ tableData = {} }) => {
    return (
        <TableContainer sx={{ marginBottom: '20px' }}>
            <MuiTable size="small" aria-label="data table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            width="50%"
                            align="center"
                            sx={{ fontSize: '22px', fontWeight: 'bold' }}
                        >
                            Вхідні параметри:
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontSize: '22px', fontWeight: 'bold' }}
                        >
                            Результати обчислень:
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Геометрія променю
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Геометрія променю
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Форма плями: {tableData.plume_form}</Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>Кут ширини: {tableData.angle_width}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Кут ширини: {tableData.angle_width}</Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>Кут висоти: {tableData.angle_height}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Кут висоти: {tableData.angle_height}</Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Лінійні розміри перерізу на заданій дистанції
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Параметри приймача-випромінювача
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Ширина плями: {tableData.plume_width_module3}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Чутливість: {tableData.sensitivity}</Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Висота плями: {tableData.plume_height_module3}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Потужність: {tableData.power}</Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Інші розраховані значення
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Додаткові параметри
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Мін. дистанція: {tableData.min_distance}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Мін. розмір плями: {tableData.min_plume_size}
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Макс. гарантована дистанція: {tableData.max_distance}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>Дистанція: {tableData.distance}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

TemplateTable.propTypes = {
    title: PropTypes.string,
    calcType: PropTypes.string,
    tableData: PropTypes.shape({
        calculator_type: PropTypes.string,
        user_id: PropTypes.string,
        sensitivity: PropTypes.number,
        power: PropTypes.number,
        plume_form: PropTypes.string,
        angle_width: PropTypes.number,
        angle_height: PropTypes.number,
        distance: PropTypes.number,
        spot_width: PropTypes.number,
        spot_height: PropTypes.number,
        min_plume_size: PropTypes.number,
        distance_for_plume_size: PropTypes.number,
        max_distance: PropTypes.number,
        min_distance: PropTypes.number,
        plume_width_module3: PropTypes.number,
        plume_height_module3: PropTypes.number,
    }),
};

export default TemplateTable;
