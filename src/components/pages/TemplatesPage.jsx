import { useEffect, useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { useTemplateService } from 'src/core/services';

import { Header, TemplateBlock } from '../interface';

const TemplatesPage = () => {
    const [templates, setTemplates] = useState([]);
    const { getAllTemplates } = useTemplateService();

    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await getAllTemplates();
            if (response) setTemplates(response.templates);

            if (response?.status === 404) {
                setTemplates('На жаль збережених шаблонів ще немає.');
            }
        };

        fetchTemplates();
    }, [getAllTemplates]);

    return (
        <div>
            <Header sx={{ marginBottom: '65px' }} />
{/* console.log(object); */}
            <Stack direction="column" gap={5} alignItems="center">
                {Array.isArray(templates) ? (
                    templates.map(item => {
                        return (
                            <TemplateBlock
                                key={item.id}
                                title={item.title}
                                calcType={item.calculator_type}
                                tableData={{ ...item }}
                            ></TemplateBlock>
                        );
                    })
                ) : (
                    <Typography>{templates}</Typography>
                )}
            </Stack>
        </div>
    );
};

export default TemplatesPage;
