import React from 'react';
import ReactDOM from 'react-dom';
import Result from '../../components/Result';
import { findByTestAtrr } from "./utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const monthlyInstallment = 0;
    const wrapper = shallow(<Result monthlyInstallment={monthlyInstallment}/>);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'resultComponent');
    expect(component.length).toBe(1);
});
