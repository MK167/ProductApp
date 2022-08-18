import { AuthCompComponent } from './layouts/Auth/auth-comp/auth-comp.component';
import { AdminLayoutComponent } from './layouts/Admin/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Services/Guards/auth-guard.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/Admin/admin-layout-module/admin-layout.module').then(m => m.AdminLayoutModule),
        canActivate: [AuthGuardGuard]
      }
    ]
  }, {
    path: '',
    component: AuthCompComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/Auth/authModule/auth.module').then(m => m.AuthModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
