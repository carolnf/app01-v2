import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adotar',
  templateUrl: './adotar.page.html',
  styleUrls: ['./adotar.page.scss'],
})
export class AdotarPage implements OnInit {

  items: Observable<any>;

  constructor(
    // Usuário autenticado
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    // routerLInk
    public router: Router,
    private cookieService: CookieService
  ) {

    this.items = afs.collection('animais').valueChanges({ idField: 'id' });

    afs.firestore.collection('animais').get().then(snap => {
      this.cookieService.put('cookieadotar', snap.size.toString());
    });
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.auth.onAuthStateChanged((userData) => {
      if (userData) {
        this.afs.firestore
          .doc(`register/${userData.uid}`)
          .get()
          .then((uData) => {
            // Se não tem perfil
            if (uData.exists) {
              console.log('gerar whatsapp');
            } else {
              this.router.navigate(['/user/register']);
            }
          });
      } else {
        this.router.navigate(['/user/login']);
      }
    });
  }

}
