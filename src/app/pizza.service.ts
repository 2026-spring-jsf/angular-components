import { Injectable } from '@angular/core';

const dummyToppingsFromApi = [
  {
  name: 'Pepperroni',
  price: 3.50,
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
  getAvailablePizzaToppings = () => dummyToppingsFromApi.map(
    x => ({
      ...x,
      checked: false;
    })
  );
  
}
