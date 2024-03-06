import { Component } from '@angular/core';
import { CharacterService } from '../services/CharacterService.service.ts.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
})
export class MainPageComponent {
  constructor(private characterService: CharacterService) {}

  get characters(): Character[] {
    return [...this.characterService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.characterService.deleteCharacter(id);
  }

  onNewCharacter(character: Character): void {
    this.characterService.addCharacter(character);
  }
}
