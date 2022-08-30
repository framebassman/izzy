import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Outcomes } from '../components/outcomes/Outcomes';

describe('<Outcomes />', () => {
    let component: ReactWrapper;

    afterEach(() => {
        component.unmount();
    });

    it('"Я" should be transform to "Мне"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'Я', roubles: 1 }
        ];

        // Act
        component = mount(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = component.find('#to1').hostNodes();
        expect(toCell.text()).toEqual('Мне');
        done();
    });

    it('"я" should be transform to "яне"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'я', roubles: 1 }
        ];

        // Act
        component = mount(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = component.find('#to1').hostNodes();
        expect(toCell.text()).toEqual('мне');
        done();
    });

    it('"Боб" should be transform to "Бобу"', done => {
        // Arrange
        const transfers: any[] = [
            { from: 'Алиса', to: 'Боб', roubles: 1 }
        ];

        // Act
        component = mount(<Outcomes transfers={transfers}/>);

        // Assert
        const toCell = component.find('#to1').hostNodes();
        expect(toCell.text()).toEqual('Бобу');
        done();
    });
});
