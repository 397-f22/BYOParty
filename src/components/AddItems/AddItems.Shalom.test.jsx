import { describe, expect, test, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItems from './AddItems';

describe('AddItems', () => {
  test('should say data not valid if not valid input', async () => {
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

