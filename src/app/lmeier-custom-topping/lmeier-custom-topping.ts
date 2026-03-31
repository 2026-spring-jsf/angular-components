import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-lmeier-custom-topping',
  imports: [
    MatCardModule,
    MatAnchor,
    MatButtonModule,
    FormsModule,
    MatInputModule
],
  templateUrl: './lmeier-custom-topping.html',
  styleUrl: './lmeier-custom-topping.css',
})
export class LmeierCustomTopping {

    protected readonly customTopping = signal("");

    protected readonly addTopping = () => this.customToppingList.update(
        prev => [...prev, this.customTopping()]
    );

    protected readonly customToppingList = signal<string[]>([]);
}
