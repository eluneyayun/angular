import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public ege: string = '34';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescriptions(): string {
    return `${this.name} - ${this.ege}`;
  }
  changeHero(): void {
    this.name = 'spidermen';
  }

  changeEge(): void {
    this.ege = '23';
  }

  reset() {
    this.name = 'ironmen';
    this.ege = '34';
  }
}
