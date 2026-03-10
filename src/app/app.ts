import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { ThamiltonRollD20 } from './thamilton-roll-d20/thamilton-roll-d20';

@Component({
  selector: 'app-root',
  imports: [PizzaToppings, ThamiltonRollD20],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-components');
}
