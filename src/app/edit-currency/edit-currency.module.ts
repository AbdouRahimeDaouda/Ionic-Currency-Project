import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCurrencyPageRoutingModule } from './edit-currency-routing.module';

import { EditCurrencyPage } from './edit-currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCurrencyPageRoutingModule
  ],
  declarations: [EditCurrencyPage]
})
export class EditCurrencyPageModule {}
