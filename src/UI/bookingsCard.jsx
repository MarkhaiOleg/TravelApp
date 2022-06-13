import React from 'react';
import '../styles/App.css';

const BookingsCard = (props) => {
    return (
        <li className="booking">
            <h3 className="booking__title">{props.booking.trip.title}</h3>
            <span className="booking__guests">{props.booking.guests} guests</span>
            <span className="booking__date">{props.booking.date}</span>
            <span className="booking__total">{props.booking.trip.price} $</span>
            <button className="booking__cancel" title="Cancel booking">
                <span className="visually-hidden">Cancel booking</span>
×
</button>
        </li>
    )
}

export default BookingsCard;
