import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PizzaToppings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
