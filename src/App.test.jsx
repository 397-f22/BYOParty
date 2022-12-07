import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App Landing Page', () => {
    
  test("Show title of the page", () => {
    render(<App />);
    expect(screen.getByText('BYOParty!')).toBeDefined();
  });

  // test("Counter should increment by one when clicked", async () => {
  //   render(<App />);
  //   const counter = screen.getByRole('button');
  //   fireEvent.click(counter);
  //   expect(await screen.getByText('count is: 1')).toBeDefined();
  // });

});