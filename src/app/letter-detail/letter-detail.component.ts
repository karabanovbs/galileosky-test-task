import {Component, Input, OnInit} from '@angular/core';
import {Letter} from '../letter';

@Component({
  selector: 'app-letter-detail',
  templateUrl: './letter-detail.component.html',
  styleUrls: ['./letter-detail.component.less']
})
export class LetterDetailComponent implements OnInit {
  @Input()
  letter: Letter;

  constructor() {
  }

  ngOnInit() {
  }

}
