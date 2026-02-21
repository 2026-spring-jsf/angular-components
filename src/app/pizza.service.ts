import { Injectable } from '@angular/core';

  const dummyToppingsFromApi = [
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
    },
  ];

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  getAvailablePizzaToppings = () => {
    
    // Make API call...

    // Transform to shape we need...
    const pizzaToppingsWithCheckedState = dummyToppingsFromApi.map(
      x => ({
        ...x,
        checked: false,
      })
    );

    // Return the transformed pizza toppings...
    return pizzaToppingsWithCheckedState;

  };

}
