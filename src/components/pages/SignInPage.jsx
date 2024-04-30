import { Block, TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { FormStyle } from 'src/styles';

const SignInPage = () => {
    const methods = useForm({
        defaultValues: {
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
                <Block sx={FormStyle}>
                    <TitleBlock
                        textAlign="center"
                        sx={{ textTransform: 'normal', marginBottom: '15px' }}
                    >
                        Увійти
                    </TitleBlock>

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
                            Увійти
                        </Button>

                        <Link to="/sign-up">Створити акаунт</Link>
                    </Box>
                </Block>
            </form>
        </FormProvider>
    );
};

export default SignInPage;
