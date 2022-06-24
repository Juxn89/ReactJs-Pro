import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect( () => {
        dispatch(startChecking());
    }, [dispatch] );

    if(checking) {
        return (<h5>Waiting...</h5>);
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={ <PublicRoute uid={uid}> <LoginScreen/> </PublicRoute> }/>
                    <Route exact path="/*" element={ <PrivateRoute uid={uid}> <CalendarScreen/> </PrivateRoute> }/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
