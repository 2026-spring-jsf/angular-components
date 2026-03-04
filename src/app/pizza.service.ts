import { Injectable } from '@angular/core';

const dummyToppingsFromApi = [
 {
  name: 'Pepperoni',
  price: 3.50,
 },
 {
  name: 'Sausage',
  price: 3.50,
 },
 {
  name: 'Extra Cheese',
  price: 0.25,
 },
];
@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  getAvailablePizzaToppings = () => dummyToppingsFromApi.map(
    x => ({
      ...x,
      checked: false,
    })
  );
  
}
