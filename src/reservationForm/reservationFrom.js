import React, { Component } from 'react';

class AddReservation extends Component {
constructor() {
    super();
    this.state = {
    date: '',
    id: '',
    name: '',
    number: '',
    time: ''
    }
}

handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

submitNewReservation = e => {
    e.preventDefault();
    const { addNewReservation } = this.props;
    const newReservation = {...this.state, id: Date.now()}
    addNewReservation(newReservation);
}

render() {
    return(
    <form>
        <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={this.handleChange}
        />
        <input
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        onChange={this.handleChange}
        />
        <input
        type='text'
        placeholder='Time'
        name='time'
        onChange={this.handleChange}
        />
        <input
        type='text'
        placeholder='number of guests'
        name='number of guests'
        onChange={this.handleChange}
        />
        <button onClick={this.submitNewReservation}>Book Reservation</button>
    </form>
    )
}
}

export default AddReservation;