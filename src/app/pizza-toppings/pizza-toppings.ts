import { Component, inject, signal } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza-toppings',
  imports: [CurrencyPipe],
  templateUrl: './pizza-toppings.html',
  styleUrl: './pizza-toppings.css',
})
export class PizzaToppings {
  private readonly pizzaSvc = inject(
    PizzaService
  );
  
  protected readonly availablePizzaToppings = signal(
    this.pizzaSvc.getAvailablePizzaToppings()
  );
}
