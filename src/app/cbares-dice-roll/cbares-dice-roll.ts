import { Component, signal, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

type Roll = {
  result: number,
  rolled: boolean
}

@Component({
  selector: 'app-cbares-dice-roll',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './cbares-dice-roll.html',
  styleUrl: './cbares-dice-roll.css',
})
export class CbaresDiceRoll {
  protected readonly numDice = signal(1);
  protected readonly results : WritableSignal<Roll[]> = signal([
    {
      result: 0,
      rolled: false
    }
  ]);

  protected readonly updateDiceCount = (val : string) => {
    this.results.update(prev => {
      // REFERENCE: https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times
      let diceArr : Roll[] = Array(Number(val)).fill({result: 0, rolled: true})
      return diceArr;
    })
  }

  protected readonly rollDice = () => this.results.update(
    currentResults => currentResults.map(
      x => ({
        result: Math.ceil(Math.random() * 6),
        rolled: true
      })
    )
  )
}
