import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TemplateBlock = ({ title }) => {
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
                    }}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#FFCCCF' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

TemplateBlock.propTypes = {
    title: PropTypes.string,
};

export default TemplateBlock;
