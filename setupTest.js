import Enzyme from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });
