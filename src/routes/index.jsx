import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import routes from './routesConfig';

const AppRoutes = () => {
    const { isAuth } = useSelector(state => state.auth);

    return (
        <Routes>
            {routes.map(({ path, component: Component, isPrivate }) =>
                isPrivate ? (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <PrivateRoute isAuth={isAuth}>
                                <Component />
                            </PrivateRoute>
                        }
                    />
                ) : (
                    <Route key={path} path={path} element={<Component />} />
                ),
            )}
        </Routes>
    );
};

export default AppRoutes;
