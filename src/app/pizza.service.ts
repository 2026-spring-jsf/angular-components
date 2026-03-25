import { Injectable } from '@angular/core';

export type PizzaTopping = {
  name: string;
  price: number;
  checked: boolean;
}
const dummyToppingsFromApi = [
  {
    name: 'Pepperoni',
    price: 3.50,
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
  
  getAvailablePizzaToppings = (): PizzaTopping[] => {
    
  // Make the API call to get the pizza toppings...

  //Shape them for use in the app...
  
    const pizzaToppingsShapedForApp = dummyToppingsFromApi
      .map(
        x => ({
          ...x,
          checked: false,
        })
      )
    ;
    
    //Return the shaped pizza toppings...
    return pizzaToppingsShapedForApp;
  }
}
