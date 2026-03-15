import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { LmeierCustomTopping } from './lmeier-custom-topping/lmeier-custom-topping';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    LmeierCustomTopping,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
