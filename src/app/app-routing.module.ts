import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticMethodComponent } from './components/arithmetic-method/arithmetic-method.component';

const routes: Routes = [
  {
    path: 'arithmetic-method',
    loadChildren: () =>
      import('./components/arithmetic-method/arithmetic-method.module').then(
        (m) => m.ArithmeticMethodModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/arithmetic-method/arithmetic-method.module').then(
        (m) => m.ArithmeticMethodModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'arithmetic-method',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
