import { Component } from '@angular/core';
import {words} from './data/wordMOCK';
import {Word} from './data/Word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';

  words: Word[] = words;
  selectedWord: Word;
  clicked: boolean;

  selectWord(word: Word): void {
    this.selectedWord = word;
  }


  clickButton(): void {
    this.clicked = true;
  }
}
