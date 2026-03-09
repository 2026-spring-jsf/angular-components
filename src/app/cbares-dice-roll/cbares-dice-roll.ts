import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cbares-dice-roll',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './cbares-dice-roll.html',
  styleUrl: './cbares-dice-roll.css',
})
export class CbaresDiceRoll {

  protected readonly results = signal([0,0]);

  protected readonly rollDice = () => {
    console.log('roll button clicked');
  }
}
