import { Component, computed, inject, signal } from '@angular/core';
import { PizzaService, PizzaTopping } from '../pizza.service';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pizza-toppings',
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
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

  protected readonly selectAll = () => this.availablePizzaToppings.update(
    currentToppings => currentToppings.map(
      topping => ({
        ...topping,
        checked: true,
      })
    )
  )

  protected readonly deselectAll = () => this.availablePizzaToppings.update(
    currentToppings => currentToppings.map(
      topping => ({
        ...topping,
        checked: false,
      })
    )
  )

}
