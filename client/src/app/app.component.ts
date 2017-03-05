import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-match></app-match>`,
  styles: [`
    app-match {
      width: 400px;
      margin: 0 auto;
      margin-top: 160px;
      text-align: center;
    }
  `]
})
export class AppComponent {}
