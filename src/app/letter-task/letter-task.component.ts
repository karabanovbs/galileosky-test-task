import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Letter} from '../letter';

@Component({
  selector: 'app-letter-task',
  templateUrl: './letter-task.component.html',
  styleUrls: ['./letter-task.component.less']
})
export class LetterTaskComponent implements OnInit, OnChanges {
  @Input()
  letter: Letter;
  testWord: string;

  isCorrect: boolean;
  isIncorrect: boolean;
  timeout: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.testWord = this.letter.challenge[Math.floor(Math.random() * this.letter.challenge.length)];
    this.isCorrect = false;
    this.isIncorrect = false;
  }

  check(char: string) {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    if (char.toLowerCase() === this.letter.name.toLowerCase()) {
      this.isCorrect = true;
      this.isIncorrect = false;
    } else {
      this.isIncorrect = true;
      this.isCorrect = false;
    }

    this.timeout = window.setTimeout(() => {
      this.isCorrect = false;
      this.isIncorrect = false;
    }, 2000);
  }
}
