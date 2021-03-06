import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuards} from "./guards/auth.guards";

const routes: Routes = [
  {
    path: 'private',
    canActivate: [AuthGuards],
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
