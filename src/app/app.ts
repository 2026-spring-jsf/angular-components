import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { CsniderIncrementer } from "./csnider-incrementer/csnider-incrementer";

@Component({
  selector: 'app-root',
  imports: [PizzaToppings, CsniderIncrementer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
