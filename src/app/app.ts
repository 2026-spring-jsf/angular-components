import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { CbaresDiceRoll } from './cbares-dice-roll/cbares-dice-roll';
import { TsteeleMultiplication } from './tsteele-multiplication/tsteele-multiplication';
import { ZsmuckerbryanChecklist } from './zsmuckerbryan-checklist/zsmuckerbryan-checklist';
import { MrooneyAddition } from './mrooney-addition/mrooney-addition';
import { LmeierCustomTopping } from './lmeier-custom-topping/lmeier-custom-topping';
import { ThamiltonRollD20 } from './thamilton-roll-d20/thamilton-roll-d20';
import { DweiseClickCounter } from './dweise-click-counter/dweise-click-counter'
import { KnorbuTaxes } from './knorbu-taxes/knorbu-taxes';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    ZsmuckerbryanChecklist,
    TsteeleMultiplication,
    CbaresDiceRoll,
    MrooneyAddition,
    TsteeleMultiplication,
    CbaresDiceRoll,
    ZsmuckerbryanChecklist,
    LmeierCustomTopping,
    ThamiltonRollD20,
    DweiseClickCounter,
    KnorbuTaxes
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-components');
}
