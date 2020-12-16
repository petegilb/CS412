import { Component, OnInit } from '@angular/core';
import {DictService} from '../services/dict.service';

@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHttpComponent implements OnInit {
  currentWord: any;
  wordInput: string;

  // inject service into component
  constructor(private dictService: DictService) { }

  ngOnInit(): void {
  }
  // i ran into trouble with cors errors but when i ran chrome with that off it worked
  getDef(): void{ // calls our node backend to get the definition of the word
    this.dictService.getDef(this.wordInput).subscribe(
      response => {
        console.log(response);
        this.currentWord = response;
      }
    );
  }

}
