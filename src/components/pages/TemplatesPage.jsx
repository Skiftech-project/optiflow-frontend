import { Stack } from '@mui/material';

import { Header, TemplateBlock } from '../interface';

const TemplatesPage = () => {
    return (
        <div>
            <Header sx={{ marginBottom: '65px' }} />

            <Stack direction="column" gap={5} alignItems="center">
                <TemplateBlock title="Test 1"></TemplateBlock>

                <TemplateBlock title="Test 2"></TemplateBlock>
            </Stack>
        </div>
    );
};

export default TemplatesPage;
