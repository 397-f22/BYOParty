import { describe, expect, test, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItems from './AddItems';

describe('AddItems', () => {
  test('Invalid data', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AddItems />} />
        </Routes>
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submit-button");
    await fireEvent.click(submitButton);
    expect(await screen.getByText('data not valid')).toBeDefined();

  });
});


describe('AddItems', () => {
    test('Valid data', async () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<AddItems />} />
          </Routes>
        </BrowserRouter>
      );
  
      const itemName = screen.getByRole('textbox', { name: /item-name/i });
      await fireEvent.change(itemName, { target: { value: 'corn' } });
      console.log(itemName.value)

      const quantityAmount = screen.getByRole('spinbutton', { name: /quantity/i });
      await fireEvent.change(quantityAmount, { target: { value: 10 } });

      const unitAmount = screen.getByRole('textbox', { name: /unit/i });
      await fireEvent.change(unitAmount, { target: { value: 'stalks' } });

      const submitButton = screen.getByTestId("submit-button");
      await fireEvent.click(submitButton);

      expect(await screen.getByText('valid')).toBeDefined();
    });
  });
