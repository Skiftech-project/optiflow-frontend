import { Stack } from '@mui/material';

import { Header, TemplateBlock } from '../interface';

const TemplatesPage = () => {
    return (
        <div>
            <Header sx={{ marginBottom: '65px' }} />

            <Stack direction="column" gap={5} alignItems="center">
                <TemplateBlock title="Fuck Putin"></TemplateBlock>

                <TemplateBlock title="GG"></TemplateBlock>
            </Stack>
        </div>
    );
};

export default TemplatesPage;
