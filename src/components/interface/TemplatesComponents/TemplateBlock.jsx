import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TemplateTable from 'src/components/ui/Table/TemplateTable';

const TemplateBlock = ({ title, calcType, tableData = {} }) => {
    return (
        <Box width="90%">
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        backgroundColor: '#FF999E',
                        margin: 0,
                        fontSize: '22px',
                    }}
                >
                    {title} ({calcType})
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#FFCCCF' }}>
                    <TemplateTable tableData={tableData} />
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
