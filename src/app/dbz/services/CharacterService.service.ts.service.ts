import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 4000,
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 3999,
    },
  ];

  deleteCharacter(id: string) {
    this.characters = this.characters.filter((item) => item.id !== id);
  }

  addCharacter(character: Character) {
    this.characters.unshift({ ...character, id: uuid() });
  }
}
