import { Component, inject, signal } from '@angular/core';
import { PizzaService, PizzaTopping } from '../pizza.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza-toppings',
  imports: [CurrencyPipe],
  templateUrl: './pizza-toppings.html',
  styleUrl: './pizza-toppings.css',
})

export class PizzaToppings {
  private readonly pizzaSvc = inject(PizzaService);
  protected readonly pizzaToppings = signal(this.pizzaSvc.getPizzaToppings());

  protected readonly toggleTopping = (topping_to_update: PizzaTopping) => this.pizzaToppings.update(
    topping => topping.map(
      topping => topping === topping_to_update ? {...topping, checked: !topping.checked,} : topping
    )
  );
}
