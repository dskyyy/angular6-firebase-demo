import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
