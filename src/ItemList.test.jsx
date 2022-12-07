import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import ItemList from './components/ItemList/ItemList';

describe('ItemList tests', () => {
    
  test("The item list should only display the items selected.", () => {
      const items = {
        "milk": {
            "quantity": 2,
            "units": "gallons",
            "selected": 1,
            "units": null
        },
        "cups": {
            "quantity": 20,
            "units": null,
            "selected": false,
            "units": null
        },
        "forks":{
            "item": "forks",
            "quantity": 30,
            "selected": false,
            "units": null
        }
      };

      const user = {uid: 1};
    render(<ItemList initItems={items} user={user}/>);
    document.getElementById("my-list").click();
    expect(screen.getByText(/milk/i)).toBeDefined();
    expect(screen.queryByText(/forks/i)).toBeNull();
  });

});