import { useEffect, useState } from 'react';

import { Stack } from '@mui/material';

import { useTemplateService } from 'src/core/services';

import { Header, TemplateBlock } from '../interface';

const TemplatesPage = () => {
    const [templates, setTemplates] = useState([]);
    const { getAllTemplates } = useTemplateService();

    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await getAllTemplates();
            if (response) setTemplates(response.templates);
        };

        fetchTemplates();
    }, [getAllTemplates]);

    return (
        <div>
            <Header sx={{ marginBottom: '65px' }} />

            <Stack direction="column" gap={5} alignItems="center">
                {templates.map(item => {
                    return (
                        <TemplateBlock
                            key={item.id}
                            title={item.title}
                            calcType={item.calculator_type}
                            tableData={{ ...item }}
                        ></TemplateBlock>
                    );
                })}
            </Stack>
        </div>
    );
};

export default TemplatesPage;
