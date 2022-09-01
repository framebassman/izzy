import * as React from 'react';
import {render, RenderResult, screen, waitFor} from '@testing-library/react';
import { Outcomes } from '../components/outcomes/Outcomes';

describe('<Outcomes />', () => {
    let component: RenderResult;

    it('"Я" should be transform to "Мне"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'Я', roubles: 1 }
        ];

        // Act
        component = render(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = screen.getByTestId('to1');
        expect(toCell).toHaveTextContent('Мне');
        done();
    });

    it('"я" should be transform to "яне"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'я', roubles: 1 }
        ];

        // Act
        component = render(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = screen.getByTestId('to1');
        expect(toCell).toHaveTextContent('мне');
        done();
    });

    it('"Боб" should be transform to "Бобу"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'Боб', roubles: 1 }
        ];

        // Act
        component = render(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = screen.getByTestId('#to1');
        expect(toCell).toHaveTextContent('Бобу');
        done();
    });
});
