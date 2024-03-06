import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>counter: {{ counter }}</p>

    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy()">+1</button>
  `,
  styles: '',
})
export class CounterComponent {
  public counter = 10;
  public increase = 1;

  increaseBy(): void {
    this.counter += this.increase;
  }

  decreaseBy(): void {
    this.counter -= this.increase;
  }

  reset() {
    this.counter = 10;
    this.increase = 1;
  }
}
