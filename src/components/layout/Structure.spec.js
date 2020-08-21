import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Structure from './Structure';
import { BrowserRouter as Router } from 'react-router-dom';
import configRedux from '../../configRedux';
import { Provider } from 'react-redux';

afterAll(cleanup);

const store = configRedux();

describe('Structure tests', () => {
  it('Structure class test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <Structure />
        </Provider>
      </Router>
    );

    expect(getByTestId('structure-test')).toHaveClass(
      'z-0 pt-20 pb-8 pl-8 pr-8'
    );
  });
});
