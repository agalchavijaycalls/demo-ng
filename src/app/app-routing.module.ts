import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'calc', pathMatch: 'full'
  },
  {
    path: 'calc',
    loadChildren: () => import('./page/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'passport',
    loadChildren: () => import('./page/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
