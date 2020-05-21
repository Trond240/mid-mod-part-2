import React, { Component } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./App')


const mockReservations = [
    {
        date: "12/29",
        id: 1,
        name: "Christie",
        number: 12
    },

    {
        date: "12/28",
        id: 2,
        name: "Trond",
        number: 12
    }
]

const renderApp = () => {
  return render(
      <App />
    )
}

describe('App', () => {

  it('renders our reservation App', ()  => {
    const { getByText, getByPlaceholderText, debug} = renderApp()
    debug;

    const nameEl = getByPlaceholderText('Nae')
    expect(nameEl).toBeInTheDocument();

    const dateEl = getByPlaceholderText("Date (mm/dd)")
    expect(dateEl).toBeInTheDocument();

    const timeEl = getByPlaceholderText("Time")
    expect(timeEl).toBeInTheDocument();

    const numberOfGuestEl = getByPlaceholderText("number of guests")
    expect(numberOfGuestEl).toBeInTheDocument();

    const addBtn = getByText("Book Reservation")
    expect(addBtn).toBeInTheDocument();

  });

  it.skip('The reservation form adds a reservation', () => {
    const { getByText, getByPlaceholderText } = renderApp()

    const nameEl = getByPlaceholderText('Name')
    expect(nameEl).toBeInTheDocument();

    const dateEl = getByPlaceholderText("Date (mm/dd)")
    expect(dateEl).toBeInTheDocument();

    const timeEl = getByPlaceholderText("Time")
    expect(timeEl).toBeInTheDocument();

    const numberOfGuestEl = getByPlaceholderText("number of guests")
    expect(numberOfGuestEl).toBeInTheDocument();

    const addBtn = getByText("Book Reservation")
    expect(addBtn).toBeInTheDocument();


    fireEvent.change(getByPlaceholderText('Name'), {target: {value: 'Trond'}});
    fireEvent.change(getByPlaceholderText('Date (mm/dd)'), {target: {value: '3/4'}});
    fireEvent.change(getByPlaceholderText('Time'), {target: {value: '8:00'}})
    fireEvent.change(getByPlaceholderText('number of guests'), {target: {value: '3'}})
    fireEvent.click(getByText('Book Reservation'));  

    expect(mockAddReservation).toHaveBeenCalledTimes(1)
  });

})
