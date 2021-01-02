import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }, //lazyloading: solo se carga cuando entra en esa ruta
  { path: '**', component: NotFoundComponent } //cuando no encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
