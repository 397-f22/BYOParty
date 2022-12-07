import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import EventDetails from './EventDetails';
import { useAuthState } from '../../utilities/firebase';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import {logRoles} from '@testing-library/dom'

describe('EventList', () => {
  const user = {uid: '1'};
  const events = {
      "1234": {
        "details": {
          "host": "Susan Saroza",
          "hostId": 1,
          "time": "2022-11-23T20:00",
          "title": "Housewarming"
        },
        "needed": {
          "cups": {
            "quantity": 20,
            "selected": false,
            "units": "null"
          },
          "forks": {
            "quantity": 30,
            "selected": false,
            "units": "null"
          },
          "milk": {
            "quantity": 2,
            "selected": false,
            "units": "gallons"
          }
        }
      },
      "8164": {
        "details": {
          "host": "Wednesday Adams",
          "hostId": "1TmwpYr8okUAhTGHo0eGa0obkYZ2",
          "time": "2022-11-30T23:11",
          "title": "Halloween Party"
        },
        "needed": {
          "cups": {
            "quantity": "12",
            "selected": false,
            "units": ""
          },
          "forks": {
            "quantity": "20",
            "selected": false,
            "units": "packs"
          }
        }
      }
    }
  
    const users = {
      "1": {
        "eventsAttended": {
          "1234": true,
          "8164": true
        }
      }
    }

  it("Home page will show a list of events for the user", async () => {
    await render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <EventDetails details={events['1234'].details} eventId='1234' needed={events['1234'].needed} />} />
        </Routes>
      </BrowserRouter>
    );

    await screen.getByText('Housewarming');
    await screen.getByText('Hosted by you');

    const editButton = screen.getByText('Edit');
    await fireEvent.click(editButton);

    const titleChange = screen.getByRole('eventTitle', { name: /title-info/i })
    const test = screen.getByLabelText('title-info');
    console.log(titleChange)
    await fireEvent.change(titleChange, { target: { value: 'My Party' } });
    expect(titleChange.value).toBe('My Party');

    const submitButton = screen.getByRole('button', { name: /Submit/i })
    await fireEvent.click(submitButton);;
    
    //const checking = screen.getByText('My Party');  
  });
});