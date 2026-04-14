import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-csnider-incrementer',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './csnider-incrementer.html',
  styleUrl: './csnider-incrementer.css',
})

export class CsniderIncrementer {
  protected count = signal(0);
  protected increment = signal(1);

  protected readonly setIncrement = (event: Event) => {
    this.increment.set(Number((event.target as HTMLInputElement).value));
  }

  protected readonly incrementCount = () => {
    this.count.update(value => value + this.increment())
  }

  protected readonly decrementCount = () => {
    this.count.update(value => value - this.increment())
  }

  protected readonly resetValues = () => {
    this.count.set(0);
    this.increment.set(1);
  } 
}