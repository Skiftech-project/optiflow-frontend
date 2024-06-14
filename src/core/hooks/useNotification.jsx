import { useState } from 'react';

const useNotification = () => {
    const [notifications, setNotifications] = useState([]);

    const showNotification = id => {
        setNotifications(prev => [...prev, id]);
    };

    const closeNotification = id => (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotifications(prev => prev.filter(notificationId => notificationId !== id));
    };

    const isNotified = id => notifications.includes(id);

    return {
        showNotification,
        closeNotification,
        isNotified,
    };
};

export default useNotification;
