import React from "react";
import { shallow } from 'enzyme';
import Button from "../../../src/components/shared/button";

const setup = (props={}) => {
    return shallow(<Button {...props} />);
};

test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.button');
    expect(component.length).toBe(1);
});

test('check the onClick callback', () => {

});

test('renders with the text', () => {

});

test('check that button with prop "isDisabled: true" is disabled', () => {
    // const props = {
    //     isDisabled: true
    // };
    // const wrapper = setup(props);
    // const component = wrapper.find('.button');
    // expect(component).toHaveStyle('cursor', 'default');
});


