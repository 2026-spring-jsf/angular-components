import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-thamilton-roll-d20',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatInputModule, MatAnchor],
  templateUrl: './thamilton-roll-d20.html',
  styleUrl: './thamilton-roll-d20.css',
})
export class ThamiltonRollD20 {
  protected readonly multiplier = signal(0);
  protected readonly result = signal(0);

  protected readonly updateMultiplier = (num: string) => this.multiplier.set(Number(num));

  protected readonly rollD20 = () => {
    let sum = 0;

    for (let i = 0; i < Number(this.multiplier()); i++) {
      let roll = Math.floor(Math.random() * 20) + 1;
      sum += roll;
    }

    this.result.set(sum);
  };

  /*
  protected readonly numberOne = signal(2);
  protected readonly numberTwo = signal(2);
  protected readonly sum = signal(4);

  protected readonly updateNumberOne = (num: string) => this.numberOne.set(Number(num));
  protected readonly updateNumberTwo = (num: string) => this.numberTwo.set(Number(num));

  protected readonly add = () => this.sum.set(this.numberOne() + this.numberTwo());
  */
}
