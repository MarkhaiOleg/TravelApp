import React, { useState } from 'react';
import Header from '../UI/header';
import Footer from '../UI/footer';
import TripCard from '../UI/tripCard';
import '../styles/App.css';




function Index() {
    const [card, setCard] = useState([
        {
            "id": "1",
            "title": "Iceland",
            "description": "Take part in the adventure and come and discover Iceland, from the Highlands to the Ocean. From the first day, you will dive into the heart of the unique landscapes of this North Atlantic island, alternating travel by vehicle on tracks at the end of the world, long hikes on major natural sites and relaxation in the hot springs. Accompanied by your guide, you will cross the multiple tracks of Iceland revealing the most varied landscapes.",
            "level": "easy",
            "duration": 15,
            "price": 4795,
            "image": "https://i.gyazo.com/0aae9c20e73caebb07c0dbdfe2bbd89c.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        },
        {
            "id": "2",
            "title": "Scotland",
            "description": "In the North of Great Britain, Scotland is a land of character which has much to offer its visitors. Mountains and valleys, islands and cliffs, castles and distilleries, ghosts and legends... Your guide will allow you to better discover the many facets of this region. The accessible and sumptuous hikes will take you to isolated places enjoying splendid or unmissable views because they are so emblematic of the country.",
            "level": "easy",
            "duration": 8,
            "price": 2145,
            "image": "https://i.gyazo.com/9692ef5341a64659e8a211f19808732f.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        },
        {
            "id": "3",
            "title": "Norway",
            "description": "This alpine course immerses us in the wild and unique atmosphere of the southern massifs of the Lofoten archipelago. It is in this sector, the most mountainous of the islands, that we have selected the most beautiful hikes, resulting from our long experience, to make you discover breathtaking landscapes.",
            "level": "moderate",
            "duration": 13,
            "price": 2690,
            "image": "https://i.gyazo.com/f51b0738c6850a24dacbfe7ef092abe2.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        },
        {
            "id": "4",
            "title": "Spitsbergen",
            "description": "This trip to the last affordable territory before the North Pole allows you to discover one of the most beautiful fjords in Spitsbergen: King’s Bay. Stages between three camps, in the heart of the bay, will allow you to sail in a sea kayak in the middle of the icebergs, to approach seals basking in the sun and to admire the whole bay from the surrounding peaks on a hike. . This polar voyage in King’s Bay will be a memorable experience.",
            "level": "moderate",
            "duration": 11,
            "price": 3495,
            "image": "https://i.gyazo.com/682bf539e0ed5041621703b1a45e532f.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        },
        {
            "id": "5",
            "title": "Greenland",
            "description": "Exceptional trip of nearly three weeks to the very north of Disko Bay, sanctuary of the largest icebergs in the northern hemisphere. A unique and exploratory stay in this isolated area of northern Greenland where tourist attendance remains sporadic.",
            "level": "difficult",
            "duration": 19,
            "price": 5395,
            "image": "https://i.gyazo.com/eef2d8dea9e6c55f1bb906ca1f5850b0.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        },
        {
            "id": "6",
            "title": "Ireland",
            "description": "Immersed in the Emerald Isle, with your guide and a small group of 8 people maximum, you will discover all the wonders of Ireland. This sumptuous, green and hilly island is rich in exceptional natural sites. Fishing villages or colorful towns, vertiginous cliffs and jagged points, geological or archaeological sites, this varied stay will allow you to visit, by carrying out hikes affordable for all, and to immerse yourself in the country. Evenings in festive towns or villages will allow you to discover the heart of Ireland, its people.",
            "level": "easy",
            "duration": 8,
            "price": 1995,
            "image": "https://i.gyazo.com/f13e6780cd7c0d7440ed04d58d948db3.jpg",
            "createdAt": "2022-05-22T17:14:38.147Z"
        }
    ])

    return (
        <div>
            <Header />
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <form className="trips-filter__form" autocomplete="off">
                        <label className="trips-filter__search input">
                            <span className="visually-hidden">Search by name</span>
                            <input name="search" type="search" placeholder="search by title" />
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by duration</span>
                            <select name="duration">
                                <option value="">duration</option>
                                <option value="0_x_5">&lt; 5 days</option>
                                <option value="5_x_10">&lt; 10 days</option>
                                <option value="10_x">&ge; 10 days</option>
                            </select>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by level</span>
                            <select name="level">
                                <option value="">level</option>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="difficult">difficult</option>
                            </select>
                        </label>
                    </form>
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <ul className="trip-list">
                        {card.map(card =>
                            <TripCard card={card} key={card.id} />
                        )}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>

    )
}

export default Index;