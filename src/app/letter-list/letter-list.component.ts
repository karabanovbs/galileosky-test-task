import {Component, Input, OnInit} from '@angular/core';
import {Letter} from '../letter';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.less']
})
export class LetterListComponent implements OnInit {
  @Input()
  currentLetter: Letter;
  @Input()
  letters: Array<Letter>;

  constructor() {
  }

  ngOnInit() {
  }

}
