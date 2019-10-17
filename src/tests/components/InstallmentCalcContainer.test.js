import React from 'react';
import ReactDOM from 'react-dom';
import InstallmentCalcContainer from '../../components/InstallmentCalcContainer';
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
    const wrapper = shallow(<InstallmentCalcContainer />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstallmentCalcContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render without error', () => {
  const component = findByTestAtrr(wrapper, 'containerComponent');
  expect(component.length).toBe(1);
});

describe('Test onAmountChange', ()=>{
  test('on amount change onAmountChange function is called',  ()=>{
    wrapper.instance().onAmountChange({ target: { value: "100000" } });
    expect(wrapper.state('amount')).toBe("100000");
  })
  
  test('amount greater than 100000 is not set to the state',  ()=>{
    wrapper.instance().onAmountChange({ target: { value: "1000001" } });
    expect(wrapper.state('amount')).toBe("");
  })
  
  test('non numeric string is not set to the state',  ()=>{
    wrapper.instance().onAmountChange({ target: { value: "abcd" } });
    expect(wrapper.state('amount')).toBe("");
  })  
})

describe('Test onDurationChange', ()=>{
  test('on duration change onDurationChange function is called',  ()=>{
    wrapper.instance().onDurationChange({ target: { value: "1" } });
    expect(wrapper.state('duration')).toBe("1");
  })
  
  test('duration greater than 5 is not set to the state',  ()=>{
    wrapper.instance().onDurationChange({ target: { value: "6" } });
    expect(wrapper.state('duration')).toBe("");
  })
  
  test('non numeric string is not set to the state',  ()=>{
    wrapper.instance().onDurationChange({ target: { value: "abcd" } });
    expect(wrapper.state('duration')).toBe("");
  })  
})

describe('Test onSubmit function', ()=>{
  test('getMonthlyInstallment is not called if amount < 10000',async ()=>{
    const getMonthlyInstallment = jest.fn();
    await wrapper.setState({
      amount: "1"
    }) 
    wrapper.instance().onSubmit();
    expect(getMonthlyInstallment).toHaveBeenCalledTimes(0)
  })

  test('getMonthlyInstallment is not called if duration < 1', async ()=>{
    const getMonthlyInstallment = jest.fn();
    await wrapper.setState({
      amount: "10000",
      duration: ""
    })
    wrapper.instance().onSubmit();
    expect(getMonthlyInstallment).toHaveBeenCalledTimes(0)
  })
})

test('Check the response data from the async function', async () => {
  const data = await wrapper.instance().getMonthlyInstallment();
  expect(data).toBe('5390.61');
});