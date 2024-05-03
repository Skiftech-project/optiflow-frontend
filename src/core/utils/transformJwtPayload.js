import { jwtDecode } from 'jwt-decode';

export const transformJwtPayload = token => {
    if (token) {
        const decodedToken = jwtDecode(token);

        return {
            username: decodedToken.username,
            email: decodedToken.sub,
        };
    }
    return null;
};
