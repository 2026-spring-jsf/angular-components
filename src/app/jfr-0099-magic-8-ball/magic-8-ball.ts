import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-magic-8-ball',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './magic-8-ball.html',
  styleUrl: './magic-8-ball.css',
})
export class Magic8Ball {

  private readonly answers = [
    'It is certain',
    'Without a doubt',
    'You may rely on it',
    'Yes definitely',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'Outlook not so good',
    'Very doubtful',
  ];

  protected readonly result = signal<string | null>(null);

  protected readonly shake = () => {
    const index = Math.floor(Math.random() * this.answers.length);
    this.result.set(this.answers[index]);
  };
}
