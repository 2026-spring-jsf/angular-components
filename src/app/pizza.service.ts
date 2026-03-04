import { Injectable } from '@angular/core';

export type PizzaTopping = {
 name: string;
 price: number;
 checked: boolean;
};

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
  
  // Make API call to get the pizza toppings

  // Shape them for use in the app
  getAvailablePizzaToppings = (): PizzaTopping[] => {
    
    const pizzaToppingsShapedForTheApp = dummyToppingsFromApi
    .map(
    x => ({
      ...x,
      checked: false,
    })
  )
  ;
  
  // Return the shaped pizza toppings...
  return pizzaToppingsShapedForTheApp;

};
}
