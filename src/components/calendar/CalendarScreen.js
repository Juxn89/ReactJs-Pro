import React, { useEffect } from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from "../ui/Navbar";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from "../../helpers/calendar-messages-es";

import 'moment/locale/es';
import { CalendarEvent } from "./CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveNote, eventSetActive, eventStartLoading } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    useEffect(() => {
      dispatch( eventStartLoading() );
    }, [dispatch])
    

    const onSelectEvent = (e) => {
        console.log('onSelectEvent: ', e);
        dispatch(eventSetActive(e));
    }

    const onDoubleClick = (e) => {
        console.log('onDobleClick: ', e);
        dispatch(uiOpenModal());

    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {



        const style = {
            backgroundColor: (uid === event.user._id) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        };

        return {
            style
        }
    };

    const onSelectSlot = (e) => {
        console.log('onSelectSlot: ', e);
        dispatch(eventClearActiveNote());
    }

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    return (        
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onView={onViewChange}
                onDoubleClickEvent={onDoubleClick}
                view={lastView}
                components={{event: CalendarEvent}}
                onSelectEvent = {onSelectEvent}
                onSelectSlot = { onSelectSlot }
                selectable = {true}
                />
                
            <CalendarModal/>
            <AddNewFab />
            { (activeEvent) && <DeleteEventFab/> }
        </div>
    );
}
