import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question: string = 'Puzzle of the day'
  sisters: Array<string> = ['Ann', 'Rose', 'Katy', 'Mary', 'Lenita'];
}
