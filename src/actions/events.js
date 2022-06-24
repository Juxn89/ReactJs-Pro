import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
    return async (dispath, getState) => {
        const { uid, name } = getState().auth;
        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();
    
            if(body.ok) {
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name
                };
    
                dispath( eventAddNew(event) );
            }
        } catch (error) {
            console.log( error );
        }
    };
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveNote = () => ({
    type: types.eventClearActiveNote
});

export const eventStartUpdate = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`event/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if(body.ok) {
                dispatch(eventUpdated(event))
            }
            else {
                console.log(body);
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDelete = () => {
    return async (dispatch, getState) => {
        try {
            const { id } = getState().activeEvent;
            const resp = await fetchConToken(`event/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if(body.ok) {
                dispatch(eventDeleted())
            }
            else {
                console.log(body);
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = () => ({
    type: types.eventDeleted
});

export const eventStartLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();
            
            const events = prepareEvents( body.events );

            dispatch( eventsLoaded(events) );
        } catch (error) {
            console.log(error);
        }
    }
}

const eventsLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});

export const eventLogout = () => ({
    type: types.eventLogout
})