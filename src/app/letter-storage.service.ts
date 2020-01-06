import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Letter} from './letter';
import {Observable} from 'rxjs';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LetterStorageService {
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
  ) {
  }

  getLetters(): Observable<Array<Letter>> {
    const lettersData = this.storage.getValue('letters');

    try {
      if (lettersData) {
        const parsed = JSON.parse(lettersData);
        return new Observable(subscriber => subscriber.next(parsed));
      }
    } catch (e) {
      this.storage.removeItem('letters');
    }

    const result = this.http.get<Array<Letter>>('/assets/defaultData.json');

    result.subscribe(letters => {
      this.storage.setValue('letters', JSON.stringify(letters));
    });

    return result;
  }
}
