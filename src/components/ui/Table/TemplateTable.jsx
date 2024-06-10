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
import { useTheme } from '@mui/material/styles';

const TemplateTable = ({ tableData = {} }) => {
    const { output_data, input_data } = tableData;
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
                            <Typography>
                                Форма плями:{' '}
                                <Highlighter>{input_data?.plume_form || '-'}</Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Кут ширини:{' '}
                                <Highlighter>
                                    {output_data?.angle_width ??
                                        input_data?.angle_width ??
                                        '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Кут ширини:{' '}
                                <Highlighter>
                                    {input_data?.angle_width || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Кут висоти:{' '}
                                <Highlighter>
                                    {output_data?.angle_height ??
                                        input_data?.angle_height ??
                                        '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Кут висоти:{' '}
                                <Highlighter>
                                    {input_data?.angle_height || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row"></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Відстань:{' '}
                                <Highlighter>{input_data?.distance || '-'}</Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row"></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Висота плями:{' '}
                                <Highlighter>
                                    {input_data?.spot_height || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row"></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Ширина плями:{' '}
                                <Highlighter>{input_data?.spot_width || '-'}</Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row"></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell scope="row">
                            <Typography fontSize="18px" fontWeight="bold">
                                Параметри приймача-випромінювача
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            {' '}
                            <Typography fontSize="18px" fontWeight="bold">
                                Лінійні розміри перерізу на заданій дистанції
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Чутливість:{' '}
                                <Highlighter>
                                    {input_data?.sensitivity || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Ширина плями:{' '}
                                <Highlighter>
                                    {output_data?.plume_width_module3 || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Потужність:{' '}
                                <Highlighter>{input_data?.power || '-'}</Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Висота плями:{' '}
                                <Highlighter>
                                    {output_data?.plume_height_module3 || '-'}
                                </Highlighter>
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
                            <Typography fontSize="18px" fontWeight="bold">
                                Інші розраховані значення
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Мін. розмір плями:{' '}
                                <Highlighter>
                                    {input_data?.min_plume_size || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Мін. дистанція:{' '}
                                <Highlighter>
                                    {output_data?.min_distance || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">
                            <Typography>
                                Дистанція для розмірів плями:
                                <Highlighter>
                                    {input_data?.distance_for_plume_size || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                        <TableCell scope="row">
                            <Typography>
                                Макс. гарантована дистанція:{' '}
                                <Highlighter>
                                    {output_data?.max_distance || '-'}
                                </Highlighter>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

const Highlighter = ({ children }) => {
    const theme = useTheme();
    const styles = { color: theme.palette.primary.main, fontWeight: 600 };
    return <span style={styles}>{children}</span>;
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

Highlighter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TemplateTable;
