// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);


  getDarkMode() {
    return this.darkMode.asObservable();
  }

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.getValue());
  }
}
