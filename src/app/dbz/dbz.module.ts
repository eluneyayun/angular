import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { CharacterComponent } from './components/characters/charaters.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';

@NgModule({
  declarations: [MainPageComponent, CharacterComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
