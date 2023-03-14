import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './pages/sample/sample.component';
import { TeapotComponent } from './pages/teapot/teapot.component';

const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'teapot', component: TeapotComponent },
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
