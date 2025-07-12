import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelperListComponent } from './components/helper-list/helper-list.component';
import { HelperFormComponent } from './components/helper-form/helper-form.component';

const routes: Routes = [
  { path: 'helpers', component: HelperListComponent },
  { path: 'add-helper', component: HelperFormComponent },
  { path: 'edit-helper/:id', component: HelperFormComponent },
  { path: '', redirectTo: '/helpers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }