import {describe, expect, it, test, vi, beforeEach} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../../App';
import { useData, useUserState }from '../../utilities/firebase';

const mockDataBase = {
    "events": {
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
      "1342": {
        "details": {
          "host": "Shalom Alarape",
          "hostId": "Bf4ZPXTGfXcnIcca5UvfVY9YDjX2",
          "time": "2022-12-22T21:40",
          "title": "Slumber Party"
        },
        "needed": {
          "cookies": {
            "quantity": "3",
            "selected": false,
            "units": "dozen"
          },
          "plates": {
            "quantity": "3",
            "selected": false,
            "units": "pack"
          }
        }
      },
    },
    "users": {
      "1": {
        "eventsAttended": {
          "1234": true,
          "8164": true
        }
      },
      "2": {
        "eventsAttended": {
          "6966": true
        }
      },
      "Bf4ZPXTGfXcnIcca5UvfVY9YDjX2": {
        "eventsAttended": {
          "1234": true,
          "1342": true
        }
      },
      "Mk8gSsztEnaoz1JeiiyNlnEgRS93": {
        "eventsAttended": {
          "6791": true
        }
      },
    }
};

// vi.mock('../../utilities/firebase');

// beforeEach(()=>{
//     useData.mockReturnValue([mockDataBase, false, null]);   
//     useUserState.mockReturnValue(null);
// })

describe('launching', () =>{
    it('landing page', async ()=>{
      render(<App/>);
      await screen.findByText(/BYOParty/);
    });
})
describe('Going to existing event ', () =>{
    it('main page', async ()=>{
        render(<App/>);
        //const button = screen.queryByTestId("addEvent");
        const button2 = screen.findByText(/Add Event/);
        //button2.click();
        console.log(button2)
    });
})