import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const firstModule = () => import('./first-component/first-component.module').then(x => x.FirstComponentModule);
const secondModule = () => import('./second-page/second-page.module').then(x => x.SecondPageModule);

const routes: Routes = [
  { path: 'firstModule', loadChildren: firstModule},
  { path: 'secondPage', loadChildren: secondModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
