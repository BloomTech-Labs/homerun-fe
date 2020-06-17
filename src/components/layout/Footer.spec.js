import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

afterAll(cleanup);

describe('footer test', () => {
  it('Footer content test', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-test')).toHaveTextContent(
      'Creative Commons - TidyHive - A Lambda Labs Project'
    );
  });

  it('Footer class test', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-test')).toHaveClass(
      'text-xs font-semibold text-white'
    );
  });
});
