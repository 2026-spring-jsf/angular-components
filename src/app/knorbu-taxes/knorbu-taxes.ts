import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-knorbu-taxes',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    MatInputModule
  ],
  templateUrl: './knorbu-taxes.html',
  styleUrl: './knorbu-taxes.css',
})
export class KnorbuTaxes {
  protected readonly inputNumber = signal(0)
  protected readonly total = signal(0)
  protected readonly tax = signal(0)

  protected readonly updateNumber = (num: string) => this.inputNumber.set(Number(num))
  protected readonly calculate = () => {
    this.tax.set(this.inputNumber() * 0.05);
    this.total.set(this.inputNumber() + this.inputNumber() * 0.05);

  }
}
