import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/index';
import Bookings from '../pages/bookings';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import Trip from '../pages/trip';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="trip" element={<Trip />} />
            <Route path="trip/:id" element={<Trip />} />
            <Route path="*" element={<Index />} />

        </Routes>
    )
}

export default AppRouter;