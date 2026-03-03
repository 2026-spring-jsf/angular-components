import { Injectable } from '@angular/core';

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
  getToppings =() => dummyToppingsFromApi.map(x => ({ ...x, checked: false }));
  
}
