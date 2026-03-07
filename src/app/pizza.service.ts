import { Injectable } from '@angular/core';

const dummyToppingsFromApi = [
  {
    name: 'Pepperoni',
    price: 3.5,
  },
  {
    name: 'Sausage',
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
  getAvailablePizzaToppings = () =>
    dummyToppingsFromApi.map((x) => ({
      ...x,
      checked: false,
    }));
}
