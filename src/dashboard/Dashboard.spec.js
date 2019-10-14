// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe('Dashboard component', () => {

  test('matches the snapshot!', () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it('gate is open and unlocked by default', () => {
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });

  it('can toggle open and close gate', () => {
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/open gate/i));
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });

  it('can toggle lock and unlock gate', () => {
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
  });
  
});
