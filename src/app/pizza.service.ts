import { Injectable } from '@angular/core';

export type PizzaTopping = {
  name: string
  price: number
  checked: boolean
}

const dummyToppingsFromApi = [
  {
    name: 'Pepperoni',
    price: 3.5
  },
  {
    name: 'Sausage',
    price: 4.25
  },
  {
    name: 'Extra Cheese',
    price: 0.99
  },
];

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getAvailablePizzaToppings = () : PizzaTopping[] => {
    // Make API call to get pizza toppings

    const pizzaToppingsShapedForTheApp = dummyToppingsFromApi.map(
      x => ({
        ...x,
        checked: false
      })
    );

    // Return pizza toppings
    return pizzaToppingsShapedForTheApp;
  }
}
