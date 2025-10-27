import React from 'react';
import HomeScreen from '../app/index';

describe('HomeScreen', () => {
  it('renders without crashing', () => {
    expect(() => React.createElement(HomeScreen)).not.toThrow();
  });
});