import { useMemo } from 'react';
import {
    CircularProgress,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: '#fff',
    },

    '&:nth-of-type(even)': {
        backgroundColor: '#fff',
    },
});

const Table = ({ tableData = {}, loading = false }) => {
    const theme = useTheme();

    const styles = useMemo(
        () => ({
            headRow: {
                '.MuiTableCell-root': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.white.main,
                    fontWeight: 'bold',
                },
            },
            bodyRow: {
                '.MuiTableCell-root': {
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                },
            },
        }),
        [theme],
    );

    const rows = useMemo(
        () => [
            { label: 'Геометрія променю', colspan: 2 },
            { label: 'Кут ширини', value: tableData?.angle_width || '-' },
            { label: 'Кут висоти', value: tableData?.angle_height || '-' },
            {
                label: 'Лінійні розміри перерізу області передачі даних на заданій дистанції',
                colspan: 2,
            },
            { label: 'Ширина плями', value: tableData?.plume_width_module3 || '-' },
            { label: 'Висота плями', value: tableData?.plume_height_module3 || '-' },
            { label: 'Інші розраховані значення', colspan: 2 },
            { label: 'Мінімальна дистанція', value: tableData?.min_distance || '-' },
            {
                label: 'Максимальна гарантована дистанція передачі даних',
                value: tableData?.max_distance || '-',
            },
        ],
        [tableData],
    );

    return (
        <TableContainer>
            <MuiTable size="small" aria-label="data table">
                <TableHead>
                    <TableRow sx={styles.headRow}>
                        <TableCell width="50%" align="center">
                            Параметр
                        </TableCell>
                        <TableCell align="center">Значення</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, i) => (
                        <StyledTableRow key={i} sx={row?.colspan && styles.bodyRow}>
                            {row?.colspan ? (
                                <TableCell
                                    scope="rowgroup"
                                    align="center"
                                    colSpan={row.colspan}
                                >
                                    {row.label}
                                </TableCell>
                            ) : (
                                <>
                                    <TableCell scope="row">{row.label}</TableCell>
                                    <TableCell scope="row" align="center">
                                        {loading ? (
                                            <CircularProgress size={14} />
                                        ) : (
                                            row.value
                                        )}
                                    </TableCell>
                                </>
                            )}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

Table.propTypes = {
    loading: PropTypes.bool,
    tableData: PropTypes.shape({
        angle_width: PropTypes.number,
        angle_height: PropTypes.number,
        plume_width_module3: PropTypes.number,
        plume_height_module3: PropTypes.number,
        min_distance: PropTypes.number,
        max_distance: PropTypes.number,
    }),
};

export default Table;
