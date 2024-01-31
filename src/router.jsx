import {createBrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.jsx";
import HallPayment from "./components/HallPayment/HallPayment.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: '/hall',
                element: <HallPayment/>
            }
        ]
    }
])