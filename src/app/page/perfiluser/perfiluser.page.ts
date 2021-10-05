import { Component, OnInit } from '@angular/core';
// Importa dependências
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.page.html',
  styleUrls: ['./perfiluser.page.scss'],
})
export class PerfiluserPage implements OnInit {
  public uid: string; // Armazena o ID do artigo a ser visualizado
  public item: Observable<any>; // Armazena o artigo completo
  public user: any; // Dados do usuário logado
  public pipe = new DatePipe('en_US'); // Formatar as datas
  items: Observable<any>;

  constructor(
    // Injeta dependência
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private router: Router,
    public auth: AngularFireAuth
  ) {
    this.auth.onAuthStateChanged((userData) => {
      this.user = userData;
      console.log(this.user.uid);
      this.item = this.afs.doc(`register/${this.user.uid}`).valueChanges();
    });
  }

  ngOnInit() {}

  // Abre perfil do usuário no Google em outra aba
  goProfile() {
    window.open('https://myaccount.google.com/');

    // Na mesma aba
    // location.href = 'https://myaccount.google.com/';
    return false;
  }
}
