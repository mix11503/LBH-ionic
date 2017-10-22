import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeycardPage } from './keycard';

@NgModule({
  declarations: [
    KeycardPage,
  ],
  imports: [
    IonicPageModule.forChild(KeycardPage),
  ],
})
export class KeycardPageModule {}
