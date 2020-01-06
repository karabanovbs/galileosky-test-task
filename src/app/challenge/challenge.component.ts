import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LetterStorageService} from '../letter-storage.service';
import {Letter} from '../letter';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.less']
})
export class ChallengeComponent implements OnInit {
  currentLetter: Letter;
  letters: Array<Letter>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private letterStorageService: LetterStorageService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const letterParam: string = params.get('letter');
      this.letterStorageService.getLetters().subscribe(letters => {
        this.letters = letters;
        this.currentLetter = letters.find(l => l.name === letterParam);
        if (!this.currentLetter) {
          this.router.navigate(['/challenge', letters[0].name]);
        }
      });
    });
  }

}
