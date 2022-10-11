import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component.component';


const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
    data: {
      title: 'first component title (show students later how use)'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstComponentRoutingModule {}
