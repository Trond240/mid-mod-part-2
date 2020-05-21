import React from 'react';
import './reservationCard.css';

export const Reservations = (props) => {
    console.log(props)
    return (
    <article className='reservation-card' id={props.id}>
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        <p>{props.time} pm</p>
        <p>Number of Guest: {props.number}</p>
        <button onClick={() => props.delete(props.id)}>Delete</button>
    </article>
    )
}