import { Component, computed, inject, signal } from '@angular/core';
import { PizzaService, PizzaTopping } from '../pizza.service';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pizza-toppings',
  imports: [
    CurrencyPipe,
    MatCardModule,
    MatButtonModule,
    MatButton,
  ],
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

  protected readonly total = computed(
    () => this.availablePizzaToppings()
      .filter(
        x => x.checked
      )
      .reduce(
        (acc, x) => acc + x.price,
        0,
      )
  );

  protected readonly toggleTopping = (t: PizzaTopping) => this.availablePizzaToppings.update(
    prev => prev.map(
      x => x === t
        ? {
          ...x,
          checked: !x.checked
        }
        : x
    )
  );

  protected readonly checkAll= () => this.availablePizzaToppings.update(
    currentAvailablePizzaToppings => currentAvailablePizzaToppings.map(
      topping => ({
        ...topping,
        checked: true,
      })
    )
  );
  
  protected readonly unCheckAll= () => this.availablePizzaToppings.update(
    currentAvailablePizzaToppings => currentAvailablePizzaToppings.map(
      topping => ({
        ...topping,
        checked: false,
      })
    )
  );
}
