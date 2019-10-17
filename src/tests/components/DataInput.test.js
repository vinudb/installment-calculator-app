import React from 'react';
import ReactDOM from 'react-dom';
import DataInput from '../../components/DataInput';
import { findByTestAtrr } from "./utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

let props = {
  onAmountChange: jest.fn(),
  onDurationChange: jest.fn(),
  onSubmit: jest.fn()
};

const setUp = () => {
    configure({ adapter: new Adapter() });
    const onAmountChange = jest.fn();
    const wrapper = shallow(<DataInput {...props}/>);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render without error', () => {
  const component = findByTestAtrr(wrapper, 'DataInputComponent');
  expect(component.length).toBe(1);
});

test('on amount change onAmountChange function is called', ()=>{
  const component = findByTestAtrr(wrapper, 'amountInput');
  component.simulate('change', { target: { value: 10000 } })
  expect(props.onAmountChange).toHaveBeenCalled();
})

test('on duration change onDurationChange function is called', ()=>{
  const component = findByTestAtrr(wrapper, 'durationInput');
  component.simulate('change', { target: { value: 5 } })
  expect(props.onDurationChange).toHaveBeenCalled();
})

test('on button click onSubmit prop function is called', ()=>{
  const component = findByTestAtrr(wrapper, 'DataInputComponent');
  component.find('button').simulate('click')
  expect(props.onSubmit).toHaveBeenCalled();
})
