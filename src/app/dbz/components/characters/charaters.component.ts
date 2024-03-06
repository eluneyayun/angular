import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './charaters.component.html',
})
export class CharacterComponent {
  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDeleteCharacter.emit(id);
  }
}
