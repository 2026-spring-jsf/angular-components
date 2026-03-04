import { Component, inject, signal, } from '@angular/core';
import { PizzaService, PizzaTopping } from '../pizza.service';
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

}
