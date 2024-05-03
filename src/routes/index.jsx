import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from 'src/core/context';
import routes from './routesConfig';
import PrivateRoute from './PrivateRoute';

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
