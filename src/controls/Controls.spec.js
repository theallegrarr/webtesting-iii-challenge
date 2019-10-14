// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;
let locked= false;
let closed= false;

const toggleLocked = () => {
  return !locked;
}
const toggleClosed = () => {
  return !closed;
}

beforeEach(() => {
  wrapper = rtl.render(<Controls 
    locked={locked}
    closed={closed}
    toggleLocked={toggleLocked}
    toggleClosed={toggleClosed}
  />);
});

describe('Controls Component', () => {

  test('matches the snapshot!', () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it('check the lock gate button', () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
  });

  it('check the close gate button', () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });
});
