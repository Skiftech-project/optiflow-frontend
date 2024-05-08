import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from 'src/core/context';

import PrivateRoute from './PrivateRoute';
import routes from './routesConfig';

const AppRoutes = () => {
    const { isAuth } = useContext(AuthContext);

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
