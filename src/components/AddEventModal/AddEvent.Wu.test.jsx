import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEventModal from './AddEventForm';

describe('AddEventModal', () => {
  test('should render the AddEventModal component', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AddEventModal />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText('Add Event')).toBeDefined();
  });
});