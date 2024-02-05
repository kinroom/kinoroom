import React from 'react'; // Import React
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.jsx';
import HallPayment from './components/HallPayment/HallPayment.jsx';

export const router = createBrowserRouter([
    {
        path: '/kinoroom',
        element: <MainPage />,
        children: [
            {
                path: '/kinoroom/hall',
                element: <HallPayment />
            }
        ]
    }
]);
