import { Injectable } from '@angular/core';

export type PizzaTopping = {
  checked: boolean;
  name: string;
  price: number;
};

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
  getPizzaToppings = (): PizzaTopping[] => {
    const SHAPED_PIZZA_TOPPINGS = PIZZA_TOPPINGS.map(topping => ({...topping, checked: false,}));
    return SHAPED_PIZZA_TOPPINGS;
  }
}
 