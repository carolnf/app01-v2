import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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
    public router: Router
  ) {

    this.items = afs.collection('animais').valueChanges({ idField: 'id'});

 }

  ngOnInit() {
  }

}
