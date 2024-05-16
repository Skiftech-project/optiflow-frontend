/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const MainPage = lazy(() => import('src/components/pages/MainPage'));
const CalculatorPage = lazy(() => import('src/components/pages/CalculatorPage'));
const ProfilePage = lazy(() => import('src/components/pages/ProfilePage'));
const RayPage = lazy(() => import('src/components/pages/RayPage'));
const SignInPage = lazy(() => import('src/components/pages/SignInPage'));
const SignUpPage = lazy(() => import('src/components/pages/SignUpPage'));
const NotFoundPage = lazy(() => import('src/components/pages/NotFoundPage/NotFoundPage'));
const ForgotPasswordPage = lazy(() => import('src/components/pages/ForgotPasswordPage'));
const RestorePasswordPage = lazy(
    () => import('src/components/pages/RestorePasswordPage'),
);

const routes = [
    { path: '/', component: MainPage, isPrivate: false },
    { path: '/register', component: SignUpPage, isPrivate: false },
    { path: '/login', component: SignInPage, isPrivate: false },
    { path: '/calculator', component: CalculatorPage, isPrivate: true },
    { path: '/profile', component: ProfilePage, isPrivate: true },
    { path: '/ray', component: RayPage, isPrivate: true },
    { path: '/login/forgotPassword', component: ForgotPasswordPage, isPrivate: false },
    {
        path: '/login/restorePassword:token',
        component: RestorePasswordPage,
        isPrivate: false,
    },
    { path: '*', component: NotFoundPage, isPrivate: false },
];

export default routes;
