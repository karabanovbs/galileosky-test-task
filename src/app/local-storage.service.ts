import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = localStorage;
  }

  getValue(key: string): string {
    return this.localStorage.getItem(key);
  }

  setValue(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
