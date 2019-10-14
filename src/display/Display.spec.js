// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Display locked={false} closed={false}  />);
});

describe('Display component', () => {

  test('matches the snapshot!', () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it('display is set to open and unlocked by default', () => {
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
});