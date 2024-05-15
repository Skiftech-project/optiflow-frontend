import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import { Button, Input } from 'src/components/ui';
// import { useUserService } from 'src/core/services';
import { validationShemaUserData } from 'src/core/shemes';
import { transformJwtPayload } from 'src/core/utils';

const ProfileForm = () => {
    const [isUserDataDisabled, setIsUserDataDisabled] = useState(true);
    const user = transformJwtPayload(localStorage.getItem('accessToken'));
    // const { updateUsernameEmail } = useUserService();
    const { userLoadingStatus } = useSelector(state => state.user);

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
        },
        resolver: yupResolver(validationShemaUserData),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const submitButtonHandler = async () => {
        // const response = await updateUsernameEmail(data);
        setIsUserDataDisabled(true);
    };

    return (
        <FormProvider {...methods}>
            <Stack direction="column" sx={{ width: '60%' }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: '22px' }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}
                    >
                        Інформація користувача
                    </Typography>
                </Stack>

                <Stack
                    direction="column"
                    component="form"
                    onSubmit={handleSubmit(submitButtonHandler)}
                    gap={3}
                >
                    <Input
                        name="username"
                        id="username"
                        fullWidth
                        label={user.username} // "Ім'я користувача:"
                        type="string"
                        size="medium"
                        disabled={isUserDataDisabled}
                    />

                    <Input
                        name="email"
                        id="email"
                        fullWidth
                        label={user.email} //"Пошта користувача:"
                        type="email"
                        size="medium"
                        disabled={isUserDataDisabled}
                    />

                    <Stack direction="row" gap="20px">
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => setIsUserDataDisabled(false)}
                        >
                            Змінити дані
                        </Button>
                        <Button
                            disabled={!formState.isValid}
                            loading={userLoadingStatus === 'loading'}
                            type="submit"
                            color="primary"
                        >
                            Зберегти
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;
