import { describe, expect, test, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';

describe('AddEventModal', () => {
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
            "forks": {
              "quantity": 30,
              "selected": false,
              "units": "null"
            },
            "cups": {
              "quantity": 20,
              "selected": 2,
              "units": "null"
            },
            "milk": {
              "quantity": 2,
              "selected": false,
              "units": "gallons"
            }
          }
        },
      }
    
      const users = {
        "1": {
          "eventsAttended": {
            "1234": true,
          }
        }
      }
  
  test('only sees items not selected or selected by user', async () => {
    await render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={ <ItemList initItems={events['1234'].needed} user={user}/>} />
          </Routes>
        </BrowserRouter>
    );

    await Object.entries(events['1234'].needed).map(([key, data], i) => {
        if(data.selected != 1 && data.selected != false){
            expect (screen.queryByTestId("item-"+key)).toBeNull();
        }
        else {
            expect (screen.getByTestId("item-"+key)).toBeDefined();
        }
    })
    /*
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AddEventModal />} />
        </Routes>
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submit-button");
    await fireEvent.click(submitButton);
    expect(await screen.getByText('data not valid')).toBeDefined();
    */

  });
});

