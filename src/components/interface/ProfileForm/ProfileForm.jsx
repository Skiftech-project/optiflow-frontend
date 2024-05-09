import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import { Button, Input } from 'src/components/ui';
import { validationShemaRegistration } from 'src/core/shemes';

// TODO: change to profile validation

const ProfileForm = () => {
    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(validationShemaRegistration),
        mode: 'all',
    });

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

                    <Stack direction="row" gap="20px">
                        <Button variant="outlined" color="primary">
                            Відмінити
                        </Button>
                        <Button type="submit" color="primary">
                            Зберегти
                        </Button>
                    </Stack>
                </Stack>

                <Input
                    name="username"
                    id="username"
                    fullWidth
                    label="Ім'я користувача:"
                    type="string"
                    size="medium"
                    sx={{ marginBottom: '25px' }}
                />

                <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                    sx={{ marginBottom: '25px' }}
                />

                <Input
                    name="password"
                    id="password"
                    fullWidth
                    label="Пароль користувача:"
                    type="password"
                    size="medium"
                />
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;
