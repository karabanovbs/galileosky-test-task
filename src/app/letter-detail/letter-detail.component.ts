import {Component, Input, OnInit} from '@angular/core';
import {Letter} from '../letter';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-letter-detail',
  templateUrl: './letter-detail.component.html',
  styleUrls: ['./letter-detail.component.less']
})
export class LetterDetailComponent implements OnInit {
  @Input()
  letter: Letter;
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
  }

}
