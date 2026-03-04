import { Injectable } from '@angular/core';
export type PizzaTopping = {
  name: string;
  price: number;
  checked: boolean;
};
const dummyToppingsFromApi = [
  { name: 'anchovies', price: 3.50 },
  { name: 'pepperoni', price: 3.50 },
  { name: 'mushrooms', price: 2.50 },
  { name: 'olives', price: 2.50 }
];
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getToppings =(): PizzaTopping[] => dummyToppingsFromApi.map(x => ({ ...x, checked: false }));
  
}
