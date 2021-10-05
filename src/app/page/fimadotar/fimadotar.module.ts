import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimadotarPageRoutingModule } from './fimadotar-routing.module';

import { FimadotarPage } from './fimadotar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimadotarPageRoutingModule
  ],
  declarations: [FimadotarPage]
})
export class FimadotarPageModule {}
