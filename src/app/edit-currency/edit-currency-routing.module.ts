import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCurrencyPage } from './edit-currency.page';

const routes: Routes = [
  {
    path: '',
    component: EditCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCurrencyPageRoutingModule {}
