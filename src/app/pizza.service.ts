import { Injectable } from '@angular/core';
export type PizzaTopping = {
  name: string;
  price: number;
  checked: boolean;
};
const dummyToppingsFromApi = [
  {
    name: 'Pepperroni',
    price: 3.5,
  },
  {
    name: 'Saussage',
    price: 4.25,
  },
  {
    name: 'Extra Cheese',
    price: 0.99,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  // making a map
  getAvailablePizzaToppings = (): PizzaTopping[] => {
    // Make the API Call to get the pizz toppings

    // Shape them for use in the app..
    const pizzaToppingsShaedForTheApp = dummyToppingsFromApi.map((x) => ({
      ...x,
      checked: false,
    }));
    // return the shpaed pizza toppings..
    return pizzaToppingsShaedForTheApp;
  };
}
