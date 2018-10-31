import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowmemberPage } from './showmember';

@NgModule({
  declarations: [
    ShowmemberPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowmemberPage),
  ],
})
export class ShowmemberPageModule {}
