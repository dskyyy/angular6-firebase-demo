import { Component, OnInit } from '@angular/core'

import { AngularFireAuth } from 'angularfire2/auth'
import { auth as FirebaseAuth } from 'firebase'

import { Task } from '../../entities/task'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  email: string
  newTask: string

  tasks: Task[] = []

  constructor(public angularFireAuth: AngularFireAuth) {}

  ngOnInit() {}

  clearTaskField() {
    this._clearNewTask()
  }

  addTask(text: string) {
    this.tasks.push(new Task(text))

    this._clearNewTask()
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
  }

  login() {
    this.angularFireAuth.auth
      .signInWithPopup(new FirebaseAuth.GoogleAuthProvider())
      .then(res => (this.email = res.user.email))
  }

  logout() {
    this.angularFireAuth.auth.signOut()
  }

  private _clearNewTask() {
    this.newTask = ''
  }
}
