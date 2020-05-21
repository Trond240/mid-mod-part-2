import React, { Component } from 'react';
import './App.css';
import AddReservation from '../reservationForm/reservationFrom';
import { ReservationsContainer } from '../reservationContainer/reservationContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addNewReservation = newReservation => {
    console.log('reservatons', this.state.reservations)
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }

  componentDidMount() {
    return fetch("http://localhost:3001/api/v1/reservations")
    .then(res => res.json())
    .then(data => {
      this.setState({reservations: data })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <AddReservation addNewReservation={this.addNewReservation}/>
        </div>
        <div className='resy-container'>
        <ReservationsContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
