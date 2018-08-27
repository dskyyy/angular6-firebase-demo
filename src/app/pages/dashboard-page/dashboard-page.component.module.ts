import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
} from '@angular/material'

import { AngularFireAuthModule } from 'angularfire2/auth'

import { DashboardPageComponent } from './dashboard-page.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    AngularFireAuthModule
  ],
  exports: [DashboardPageComponent],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
