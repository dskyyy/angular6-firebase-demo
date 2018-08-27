import { Component, OnInit } from '@angular/core'

import { AngularFireAuth } from 'angularfire2/auth'
import { auth as FirebaseAuth } from 'firebase'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  email: string

  constructor(public angularFireAuth: AngularFireAuth) {}

  ngOnInit() {}

  login() {
    this.angularFireAuth.auth
      .signInWithPopup(new FirebaseAuth.GoogleAuthProvider())
      .then(res => (this.email = res.user.email))
  }

  logout() {
    this.angularFireAuth.auth.signOut()
  }
}
