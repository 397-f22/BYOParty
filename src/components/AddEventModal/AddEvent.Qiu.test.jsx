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

describe("should render the AddEventModal component 2", () => {
    it(" ", async () => {
        getUser.mockReturnValue([mockUser]);
        await render(<Subheader jobs={mockUser["jobs"]} user={mockUser} />, {
            wrapper: BrowserRouter,
        });
        const tlTab = screen.getByTestId("Their Loss");
        await fireEvent.click(tlTab);
        const tlList = screen.getByTestId("Their Loss List");
        expect(Object.values(tlList)[1].children).toHaveLength(2);
    });
});