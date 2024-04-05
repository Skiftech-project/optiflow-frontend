import { useMemo } from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: '#fff',
    },

    '&:nth-of-type(even)': {
        backgroundColor: '#fff',
    },
});

const Table = ({ tableData }) => {
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
            { label: 'Кут ширини', value: tableData?.angleWidth || '-' },
            { label: 'Кут висоти', value: tableData?.angleHeight || '-' },
            {
                label: 'Лінійні розміри перерізу області передачі даних на заданій дистанції',
                colspan: 2,
            },
            { label: 'Ширина плями', value: tableData?.plumeWidth || '-' },
            { label: 'Висота плями', value: tableData?.plumeHeight || '-' },
            { label: 'Інші розраховані значення', colspan: 2 },
            { label: 'Мінімальна дистанція', value: tableData?.minDistance || '-' },
            {
                label: 'Максимальна гарантована дистанція передачі даних',
                value: tableData?.maxDistance || '-',
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
                                        {row.value}
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
    tableData: PropTypes.shape({
        angleWidth: PropTypes.number,
        angleHeight: PropTypes.number,
        plumeWidth: PropTypes.number,
        plumeHeight: PropTypes.number,
        minDistance: PropTypes.number,
        maxDistance: PropTypes.number,
    }),
};

export default Table;
