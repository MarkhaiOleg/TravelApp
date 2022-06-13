import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from '../UI/header';
import Footer from '../UI/footer';
import '../styles/App.css';
import iceland from '../images/iceland.jpg';

const Trip = (props) => {
    const { id } = useParams();

    return (

        < div >
            <Header />
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img src={iceland} className="trip__img" alt="" />
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                        </div>
                        <div className="trip__description">
                            Take part in the adventure and come and discover Iceland, from the Highlands to the Ocean. From the first day, you will dive into the heart of the unique landscapes of this North Atlantic island, alternating travel by vehicle on tracks at the end of the world, long hikes on major natural sites and relaxation in the hot springs. Accompanied by your guide, you will cross the multiple tracks of Iceland revealing the most varied landscapes.
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">7000 $</strong>
                        </div>
                        <button className="trip__button button">Book a trip</button>
                    </div>
                </div>
            </main>
            <Footer />
            <div hidden>
                <div className="modal">
                    <div className="trip-popup">
                        <button className="trip-popup__close">×</button>
                        <form className="trip-popup__form" autocomplete="off">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Date</span>
                                <input name="date" type="date" required />
                            </label>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Number of guests</span>
                                <input name="guests" type="number" min="1" max="10" value="1" required />
                            </label>
                            <span className="trip-popup__total">
                                Total: <output class="trip-popup__total-value">4000$</output>
                            </span>
                            <button className="button" type="submit">Book a trip</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )




}

export default Trip;