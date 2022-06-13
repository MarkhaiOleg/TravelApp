import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const TripCard = (props) => {

    return (
        <li className="trip-card">
            <img src={props.card.image} alt="" />
            <div className="trip-card__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{props.card.title}</h3>
                    <div className="trip-info__content">
                        <span className="trip-info__duration"><strong>{props.card.duration}</strong> days</span>
                        <span className="trip-info__level">{props.card.level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{props.card.price} $</strong>
                </div>
            </div>
            <Link to={`/trip/${props.card.id}`} className="button" onClick="renderTripCard()">Discover a trip</Link>

        </li>
    )
}

export default TripCard;