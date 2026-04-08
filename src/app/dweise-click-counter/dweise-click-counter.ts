import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dweise-click-counter',
  imports: [    
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './dweise-click-counter.html',
  styleUrl: './dweise-click-counter.css',
})
export class DweiseClickCounter {
  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
