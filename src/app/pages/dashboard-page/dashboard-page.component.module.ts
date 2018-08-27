import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule } from '@angular/material'

import { AngularFireAuthModule } from 'angularfire2/auth'

import { DashboardPageComponent } from './dashboard-page.component'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    AngularFireAuthModule
  ],
  exports: [DashboardPageComponent],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
