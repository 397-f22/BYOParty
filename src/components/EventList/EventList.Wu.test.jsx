import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import EventList from './EventList';
import { useAuthState } from '../../utilities/firebase';


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
      <EventList uid={user.uid} userData={users} data={events} />
    );
    // await screen.getByText('Halloween Party');
  });

});