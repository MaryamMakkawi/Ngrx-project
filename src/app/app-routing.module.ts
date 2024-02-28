import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticMethodComponent } from './components/arithmetic-method/component/arithmetic-method.component';

const routes: Routes = [
  {
    path: 'arithmetic-method',
    loadChildren: () =>
      import('./components/arithmetic-method/arithmetic-method.module').then(
        (m) => m.ArithmeticMethodModule
      ),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./components/blog/blog.module').then(
        (m) => m.BlogModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/users/users.module').then(
        (m) => m.UsersModule
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
