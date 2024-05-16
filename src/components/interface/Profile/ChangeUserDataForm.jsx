import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Button, Input } from 'src/components/ui';
import { useUserService } from 'src/core/services';
import { validationSchemaUserData } from 'src/core/shemes';
import { transformJwtPayload } from 'src/core/utils';

const ChangeUserDataForm = () => {
    const user = transformJwtPayload(localStorage.getItem('accessToken'));
    const { updateUsernameEmail } = useUserService();
    const { dataLoadingStatus } = useSelector(state => state.userData);

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
        },
        resolver: yupResolver(validationSchemaUserData),
        mode: 'onChange',
    });

    const { formState, handleSubmit } = methods;

    useEffect(() => {
        methods.setValue('username', user.username);
        methods.setValue('email', user.email);
    }, [methods]);

    const submitButtonHandler = async data => {
        await updateUsernameEmail(data);
    };

    return (
        <FormProvider {...methods}>
            <Stack
                direction="column"
                component="form"
                onSubmit={handleSubmit(submitButtonHandler)}
                gap={3}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}
                >
                    Інформація користувача
                </Typography>

                <Input
                    name="username"
                    id="username"
                    fullWidth
                    label="Ім'я користувача:"
                    type="string"
                    size="medium"
                    startAdornment={<AccountCircleOutlinedIcon />}
                />

                <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                    startAdornment={<EmailOutlinedIcon />}
                />

                <Stack direction="row" gap="20px">
                    <Button
                        disabled={!formState.isValid}
                        type="submit"
                        color="primary"
                        loading={dataLoadingStatus === 'loading'}
                    >
                        Зберегти
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ChangeUserDataForm;
