import { Stack, Typography } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Header } from '../interface';
import { Block, Input } from '../ui';

const ForgotPasswordPage = () => {
    // const methods = useForm({
    //     defaultValues: {
    //         username: '',
    //         email: '',
    //         password: '',
    //     },
    //     resolver: yupResolver(validationShemaRegistration),
    //     mode: 'all',
    // });

    return (
        <Stack width="100%" height="100vh" alignItems="center" justifyContent="center">
            <Header position="fixed" />

            <Block padding="30px" sx={{ width: '500px' }}>
                <Typography align="center" variant="h6">
                    Щоб відновити пароль, введіть вашу поштову скриньку
                </Typography>

                {/* <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                    startAdornment={<EmailOutlinedIcon />}
                /> */}
            </Block>
        </Stack>
    );
};

export default ForgotPasswordPage;
