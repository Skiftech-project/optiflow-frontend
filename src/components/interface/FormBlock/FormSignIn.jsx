import { Block, TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { FormStyle } from 'src/styles';

import { maui, song } from 'src/assets';

const FormSignIn = () => {
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
            <audio src={song} autoPlay>
                Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>
            <form>
                <img
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={maui}
                />
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
                            Submit
                        </Button>

                        <Link to="/sign-up">Створити акаунт</Link>
                    </Box>
                </Block>
            </form>
        </FormProvider>
    );
};

export default FormSignIn;
