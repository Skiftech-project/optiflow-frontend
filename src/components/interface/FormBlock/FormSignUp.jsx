import { Block, TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { FormStyle } from 'src/styles';

import { maui2 } from 'src/assets';

const FormSignUp = () => {
    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    const handleSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <FormProvider {...methods}>
            <form>
                <img
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                    }}
                    src={maui2}
                />
                <Block sx={FormStyle}>
                    <TitleBlock
                        textAlign="center"
                        sx={{ textTransform: 'normal', marginBottom: '15px' }}
                    >
                        Зареєструватися
                    </TitleBlock>

                    <Input
                        name="username"
                        id="username"
                        fullWidth
                        label="Ім'я користувача:"
                        sx={{ marginBottom: '15px' }}
                    />

                    <Input
                        name="email"
                        id="email"
                        fullWidth
                        label="Пошта користувача:"
                        sx={{ marginBottom: '15px' }}
                        type="email"
                    />

                    <Input
                        name="password"
                        id="password"
                        fullWidth
                        label="Пароль користувача:"
                        sx={{ marginBottom: '15px' }}
                        type="password"
                    />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Button
                            disabled={!methods.formState.isValid}
                            onClick={methods.handleSubmit(handleSubmit)}
                            color="primary"
                        >
                            Submit
                        </Button>

                        <Link to="/sign-in">Акаунт вже існує?</Link>
                    </Box>
                </Block>
            </form>
        </FormProvider>
    );
};

export default FormSignUp;
