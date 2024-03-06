import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deleteHero?: string;

  public herores: string[] = [
    'spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'thor',
  ];

  delitLastHero(): void {
    this.deleteHero = this.herores.pop();
    console.log(this.deleteHero);
  }
}
