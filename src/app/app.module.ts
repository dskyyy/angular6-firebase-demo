import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.component.module'

import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    DashboardPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
