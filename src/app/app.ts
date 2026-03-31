import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { MrooneyAddition } from './mrooney-addition/mrooney-addition';
import { ZsmuckerbryanChecklist } from './zsmuckerbryan-checklist/zsmuckerbryan-checklist';
import { TsteeleMultiplication } from './tsteele-multiplication/tsteele-multiplication';
import { CbaresDiceRoll } from './cbares-dice-roll/cbares-dice-roll';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    MrooneyAddition,
    TsteeleMultiplication,
    CbaresDiceRoll,
    ZsmuckerbryanChecklist,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
