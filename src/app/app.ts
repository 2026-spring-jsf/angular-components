import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { TsteeleMultiplication } from './tsteele-multiplication/tsteele-multiplication';
import { CbaresDiceRoll } from './cbares-dice-roll/cbares-dice-roll';
import { ZsmuckerbryanChecklist } from './zsmuckerbryan-checklist/zsmuckerbryan-checklist';
import { MrooneyAddition } from './mrooney-addition/mrooney-addition';
import { LmeierCustomTopping } from './lmeier-custom-topping/lmeier-custom-topping';
import { ThamiltonRollD20 } from './thamilton-roll-d20/thamilton-roll-d20';
import { DweiseClickCounter } from './dweise-click-counter/dweise-click-counter'
import { KnorbuTaxes } from './knorbu-taxes/knorbu-taxes';
import { CsniderIncrementer } from "./csnider-incrementer/csnider-incrementer";
import { Jfr0099Magic8Ball } from './jfr-0099-magic-8-ball/jfr-0099-magic-8-ball';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    TsteeleMultiplication,
    CbaresDiceRoll,
    ZsmuckerbryanChecklist,
    MrooneyAddition,
    LmeierCustomTopping,
    ThamiltonRollD20,
    DweiseClickCounter,
    KnorbuTaxes,
    CsniderIncrementer,
    Jfr0099Magic8Ball
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-components');
}
