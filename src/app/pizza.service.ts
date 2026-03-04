import { Injectable } from '@angular/core';

export type PizzaTopping = {
  name: string;
  price: number;
  checked?: boolean;
};

const dummyToppingsFromApi = [
  { 
    name: 'Pepperoni',
    price: 3.5,
  },
  { 
    name: 'Sausage',
    price: 4.0,
  },
  { 
    name: 'Extra Cheese',
    price: 2.0,
  }
]; 
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getAvailablePizzaToppings = (): PizzaTopping[] => {
    // Simulate an API call to fetch available pizza toppings

    // In a real application, you would use HttpClient to make an HTTP request to your backend API
    const toppingsMapped = dummyToppingsFromApi.map(x => ({
      ...x,
      checked: false,
    }))
    return toppingsMapped;
  };
}
