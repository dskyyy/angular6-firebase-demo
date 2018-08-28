import { Component, OnInit, OnDestroy } from '@angular/core'

import { AngularFirestore, DocumentData } from 'angularfire2/firestore'
import { AngularFireAuth } from 'angularfire2/auth'

import { auth as FirebaseAuth, User } from 'firebase'

import { Subscription } from 'rxjs'
import { flatMap, filter } from 'rxjs/operators'

import * as firebase from 'firebase'
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  user: User
  newTask: string

  tasks: any[] = []
  tasksSubscription: Subscription

  constructor(private snackbar: MatSnackBar, private db: AngularFirestore, public angularFireAuth: AngularFireAuth) {}

  ngOnInit() {
    this.tasksSubscription = this._subscribeOnTasks()
  }

  ngOnDestroy() {
    this._unsubscribeFromTasks()
  }

  clearTaskField() {
    this.newTask = ''
  }

  addTask(text: string) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()

    this.db
      .collection('users')
      .doc(this.user.uid)
      .collection('tasks')
      .add({ text, timestamp })
      .then(ref => {
        this.snackbar.open(`Task #${ref.id} was created`)

        ref.update({ id: ref.id })

        this.clearTaskField()
      })
      .catch(err => this.snackbar.open(err))
  }

  removeTask(id: string) {
    this.db
      .collection('users')
      .doc(this.user.uid)
      .collection('tasks')
      .doc(id)
      .delete()
      .then(() => this.snackbar.open(`Task ${id} was removed`))
      .catch(err => this.snackbar.open(err))
  }

  login() {
    this.angularFireAuth.auth
      .signInWithPopup(new FirebaseAuth.GoogleAuthProvider())
      .then(() => this._subscribeOnTasks())
      .catch(err => this.snackbar.open(err))
  }

  logout() {
    this._unsubscribeFromTasks()

    this.angularFireAuth.auth.signOut()
  }

  private _subscribeOnTasks() {
    return this.angularFireAuth.user
      .pipe(
        filter(user => !!user),
        flatMap(user => {
          this.user = user

          return this.db
            .collection('users')
            .doc(user.uid)
            .collection('tasks', ref => ref.orderBy('timestamp'))
            .valueChanges()
        })
      )
      .subscribe(tasks => (this.tasks = tasks))
  }

  private _unsubscribeFromTasks() {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe()
      this.tasks = []
    }
  }
}
