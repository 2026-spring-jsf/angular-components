import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { KnorbuTaxes } from './knorbu-taxes/knorbu-taxes';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    KnorbuTaxes
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
