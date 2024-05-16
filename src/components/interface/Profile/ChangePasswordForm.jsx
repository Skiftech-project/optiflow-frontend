import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack } from '@mui/material';

import { Button, InputPassword } from 'src/components/ui';
import { useUserService } from 'src/core/services';
import { validationShemaUpdatePassword } from 'src/core/shemes';

const ChangePasswordForm = () => {
    const [isPasswordsDisabled, setIsPasswordsDisabled] = useState(true);
    const { dataLoadingStatus } = useSelector(state => state.password);
    const { updatePassword } = useUserService();

    const methods = useForm({
        defaultValues: {
            newPassword: '',
            oldPassword: '',
        },
        resolver: yupResolver(validationShemaUpdatePassword),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        await updatePassword(data);
        methods.reset();
        setIsPasswordsDisabled(true);
    };

    return (
        <FormProvider {...methods}>
            <Stack component="form" onSubmit={handleSubmit(handleFormSubmit)} gap={3}>
                <InputPassword
                    id="oldPassword"
                    name="oldPassword"
                    label="Старий пароль"
                    disabled={isPasswordsDisabled}
                />

                <InputPassword
                    id="newPassword"
                    name="newPassword"
                    label="Новий пароль"
                    disabled={isPasswordsDisabled}
                />

                <Stack direction="row" gap="20px">
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setIsPasswordsDisabled(false)}
                    >
                        Змінити пароль
                    </Button>
                    <Button
                        disabled={!formState.isValid}
                        type="submit"
                        color="primary"
                        loading={dataLoadingStatus === 'loading'}
                    >
                        Зберегти пароль
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ChangePasswordForm;
