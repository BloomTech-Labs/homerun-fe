import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Name from './Name';

// Source: https://github.com/ant-design/ant-design/issues/21096#issuecomment-578118486
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

afterAll(cleanup);

describe('Name component', () => {
  it('Converts a name of 2 words into initials', () => {
    let name = render(<Name name="Test name" />);
    let initials = name.getByTestId(/initials/);
    expect(initials.textContent).toBe('TN');
  });

  it('Also contains the full name', () => {
    let name = render(<Name name="Test name" />);
    let full = name.getByTestId(/full-name/);
    expect(full.textContent).toBe('Test name');
  });
});
