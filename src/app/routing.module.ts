import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterGuard } from './app.guard';
import { RouterResolver } from './app.resolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ RouterGuard ],
    resolve: {
      resolver: RouterResolver
    }
  },
  {
    path: 'home/:id',
    component: HomeComponent,
    canActivate: [ RouterGuard ],
    resolve: {
      resolver: RouterResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingMOdule {

}