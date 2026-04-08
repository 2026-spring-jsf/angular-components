import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-mrooney-addition',
  imports: [MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatFormField, MatInputModule],
  templateUrl: './mrooney-addition.html',
  styleUrl: './mrooney-addition.css',
})
export class MrooneyAddition { 
  userName: string = '';
  answer: string = '';

  responses: string[] = [
    'It is certain',
    'Reply hazy, try again',
    'Ask again later',
    'Do not count on it',
    'My sources say no',
    'Outlook good',
    'Yes definitely',
    'Very doubtful'
  ];

  askEightBall() {
    const randomIndex = Math.floor(Math.random() * this.responses.length); 
    this.answer =  `Hello, ${this.userName}, ${this.responses[randomIndex]}`;
    this.userName = '';
   
  }

}
