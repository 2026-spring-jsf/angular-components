import { Injectable } from '@angular/core';

const PIZZA_TOPPINGS = [
  {
    name: "Pepperoni",
    price: 3.50,
  },
  {
    name: "Sausage",
    price: 4.25,
  },
  {
    name: "Extra Cheese",
    price: 0.99,
  }
];

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getPizzaToppings = () => PIZZA_TOPPINGS.map(topping => ({...topping, checked: false,}));
}
