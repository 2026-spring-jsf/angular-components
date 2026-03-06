import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tsteele-addition',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './tsteele-addition.html',
  styleUrl: './tsteele-addition.css',
})
export class TsteeleAddition {

  protected readonly numberOne = signal(1);
  protected readonly numberTwo = signal(1);
  protected readonly sum = signal(2);

}
