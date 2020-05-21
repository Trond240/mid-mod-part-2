import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReservationsContainer } from '../reservationContainer/reservationContainer';



describe('Lisitng Container', () => {
    it('should Render Listings to the page', () => {

            const { getByText } = render(
                <ReservationsContainer 
                    reservations={[
                        {
                            date: "12/29",
                            id: 1,
                            name: "Christie",
                            number: 12,
                            time: "7:00"    
                        },
                        {
                            date: "12/30",
                            id: 2,
                            name: "Jeff",
                            number: 2,
                            time: "6:00" 
                        }
                    ]}
                />
        )

        const nameOneEl = getByText('Christie')
        expect(nameOneEl).toBeInTheDocument(); 

        const dateEl = getByText('12/29')
        expect(dateEl).toBeInTheDocument(); 

        const timeEl = getByText('7:00 pm')
        expect(timeEl).toBeInTheDocument();

        const guestEl = getByText('Number of Guest: 12')
        expect(guestEl).toBeInTheDocument();

    });
});