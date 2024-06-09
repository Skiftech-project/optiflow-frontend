/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Stack, Typography } from '@mui/material';

import { useTemplateService } from 'src/core/services';

import { Header, TemplateBlock } from '../interface';
import { BarLoader } from '../ui';

const TemplatesPage = () => {
    const { templates, errorMessage, templatesLoadingStatus } = useSelector(
        state => state.getTemplates,
    );

    const { getAllTemplates } = useTemplateService();

    useEffect(() => {
        getAllTemplates();
    }, []);

    return (
        <>
            <Header sx={{ marginBottom: '65px' }} />
            <Stack direction="column" gap={5} alignItems="center">
                {errorMessage ? (
                    <Typography>{errorMessage}</Typography>
                ) : templatesLoadingStatus === 'loading' ? (
                    <BarLoader />
                ) : (
                    templates.map(item => {
                        return (
                            <TemplateBlock
                                key={item.id}
                                title={item.title}
                                calcType={item.calculator_type}
                                tableData={{ ...item }}
                            />
                        );
                    })
                )}
            </Stack>
        </>
    );
};

export default TemplatesPage;
