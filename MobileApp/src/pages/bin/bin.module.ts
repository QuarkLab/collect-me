import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BinPage } from './bin';

@NgModule({
  declarations: [
    BinPage,
  ],
  imports: [
    IonicPageModule.forChild(BinPage),
  ],
})
export class BinPageModule {}
