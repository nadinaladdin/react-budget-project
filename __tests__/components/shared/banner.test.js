import React from "react";
import { shallow } from 'enzyme';
import Banner from "../../../src/components/shared/banner";

const setup = (props={}) => {
    return shallow(<Banner {...props} />);
};

test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.banner');
    expect(component.length).toBe(1);
});

test('renders with props', () => {
    const props = {
        title: 'Example title',
        text: 'Example text'
    };
    const wrapper = setup(props);

    const titleComponent = wrapper.find('.banner__title');
    expect(titleComponent.text().length).not.toBe(0);

    const textComponent = wrapper.find('.banner__text');
    expect(textComponent.text().length).not.toBe(0);
});
