import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { eventLogout } from "./events";

export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth', {email, password}, 'POST');
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('toke-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }
        else {
            const messageError = body.errors.errors[0].msg;
            Swal.fire('Error', messageError, 'error');
        }
    }
};

export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth/new', {email, password, name}, 'POST');
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('toke-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }
        else {
            const messageError = body.errors.errors[0].msg;
            Swal.fire('Error', messageError, 'error');
        }
    }
}

export const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('toke-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }
        else {
            // const messageError = body.errors.errors[0].msg;
            // Swal.fire('Error', messageError, 'error');
            dispatch(checkingFinish());
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(eventLogout());
        dispatch(logout());
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

const logout = () => ({ type: types.authLogout });