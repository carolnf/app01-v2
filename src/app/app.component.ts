import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  public size: number;
  public notSize: number;
  public showNotifications = '';
  public cookieSize: number;

  constructor(
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

    this.cookieSize = parseInt(this.cookieService.get('cookieadotar'), 10);
    if (isNaN(this.cookieSize)) {this.cookieSize = 0;}

    this.afs.firestore.collection('animais').onSnapshot(snap => {
      this.size = snap.size;
      if (this.size > this.cookieSize) {
        this.notSize = this.size - this.cookieSize;
        this.showNotifications = this.notSize.toString();
      }
    });
  }

  updateCookie() {
    this.afs.firestore.collection('animais').get().then(snap => {
      this.cookieService.put('cookieadotar', snap.size.toString());
      this.notSize = 0;
      this.showNotifications = '';
      this.router.navigate(['/adotar']);
    });
  }
}
