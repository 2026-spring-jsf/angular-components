import { Injectable } from '@angular/core';

export type PizzaTopping = {
  name: string;
  price: number;
  checked: boolean;
};
const dummyToppingsFromAPI = [
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
  getAvailablePizzaToppings = (): PizzaTopping[] =>
    dummyToppingsFromAPI.map((x) => ({ ...x, checked: false }));
}
