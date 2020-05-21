import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Reservations } from './reservationCard';

describe('ReservationCard', () => {
    it('Should render reservation card with correct text', () => {
        const { getByText } = render(
            <Reservations
                name={'Trond'}
                date={'3/4'}
                time={'8:00'}
                number={8}
                id={1}
            /> 
            )

        const nameElemenet = getByText('Trond')
        expect(nameElemenet).toBeInTheDocument();

        const dateEl = getByText('3/4')
        expect(dateEl).toBeInTheDocument();

        const timeEl = getByText('8:00 pm')
        expect(timeEl).toBeInTheDocument();

        const numberOfGuestEl = getByText('Number of Guest: 8')
        expect(numberOfGuestEl).toBeInTheDocument();

        const deleteBtn = getByText('Delete')
        expect(deleteBtn).toBeInTheDocument();
    });
}); 