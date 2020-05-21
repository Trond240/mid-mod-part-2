import React from 'react';
import { render, getByText, fireEvent, getByPlaceholderText } from '@testing-library/react'
import '@testing-library/jest-dom';
import AddReservation from '../reservationForm/reservationFrom';




describe('Add Reservation', () => {
    it('Should render the reservation form', () => {
        let id = 1;
        const mockAddReservation = jest.fn()
        const { getByText, getByPlaceholderText } = render(
                <AddReservation  addNewReservation={mockAddReservation}/>
            )

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
            // expect(mockAddReservation).toHaveBeenCalledWith({ id: Date.now(), name: 'Trond', date: '3/4', time: '8:00', number: '3'})
    });
    });