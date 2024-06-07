import { useMemo } from 'react';

import PropTypes from 'prop-types';

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

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: '#fff',
    },

    '&:nth-of-type(even)': {
        backgroundColor: '#fff',
    },
});

const Table = ({ loading = false, sx = {}, rowsConfig = [] }) => {
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

    return (
        <TableContainer sx={sx}>
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
                    {rowsConfig.map((row, i) => (
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
    sx: PropTypes.object,
    loading: PropTypes.bool,
    rowsConfig: PropTypes.array,
};

export default Table;
