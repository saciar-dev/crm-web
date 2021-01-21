import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { EntidadesComponent } from './components/entidades/entidades.component';

import { AuthGuard } from './auth.guard';
import { SuperfamiliasViewComponent } from './components/superfamilias-view/superfamilias-view.component';
import { FamiliasViewComponent } from './components/familias-view/familias-view.component';
import { ServiciosViewComponent } from './components/servicios-view/servicios-view.component';

const routes: Routes = [
  {
    path: '',
    component:SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'entities',
    component:EntidadesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'superfamilias',
    component: SuperfamiliasViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'familias/:id',
    component: FamiliasViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios/:id',
    component: ServiciosViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
