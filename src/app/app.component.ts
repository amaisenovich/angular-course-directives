import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5, 6];
  oddNumbers = [2, 4, 6];
  evenNumbers = [1, 3, 5];
  onlyOdd = false;
  value = 10;
  intervalId = 0;

  constructor() {
    this.intervalId = window.setInterval(
      () => {
        this.value += 10
        if (this.value > 20) {
          window.clearInterval(this.intervalId)
        }
      },
      1000
    )
  }
}
