import { Component } from '@angular/core';
import {words} from './data/wordMOCK';
import {Word} from './data/Word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';

  words: Word[] = words;
  selectedWord: Word;
  clicked: boolean;
  wordInput: string;

  selectWord(word: Word): void {
    this.selectedWord = word;
  }

}
