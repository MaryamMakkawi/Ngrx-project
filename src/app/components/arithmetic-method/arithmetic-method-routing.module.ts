import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticMethodComponent } from './arithmetic-method.component';

const routes: Routes = [
  {
    path: '',
    component: ArithmeticMethodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArithmeticMethodRoutingModule {}
