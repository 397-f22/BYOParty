import { describe, expect, test, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEventModal from './AddEventForm';

vi.mock('./AddEventFrom');

describe('AddEventModal', () => {
  test('should say data not valid if not valid input', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AddEventModal />} />
        </Routes>
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submit-button");
    await fireEvent.click(submitButton);
    await expect(screen.getByText('data not valid')).toBeDefined();

  });
});

