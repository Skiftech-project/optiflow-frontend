import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button } from 'src/components/ui';
import TemplateTable from 'src/components/ui/Table/TemplateTable';
import { useTemplateService } from 'src/core/services';

const TemplateBlock = ({ title, calcType, tableData = {} }) => {
    const { dataLoadingStatus } = useSelector(state => state.deleteTemplate);
    const { deleteTemplate } = useTemplateService();

    const deleteTemplateHandler = async () => {
        deleteTemplate(tableData.id);
    };

    return (
        <Box width="90%">
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        backgroundColor: '#A8C2F0',
                        margin: 0,
                    }}
                >
                    <Typography fontSize="22px">
                        {title} ({calcType})
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#FFF' }}>
                    <TemplateTable tableData={tableData} />

                    <Stack direction="column" alignItems="start">
                        <Button
                            loading={dataLoadingStatus === 'loading'}
                            onClick={deleteTemplateHandler}
                        >
                            Видалити шаблон
                        </Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

TemplateBlock.propTypes = {
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

export default TemplateBlock;
