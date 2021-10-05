import { Component, OnInit } from '@angular/core';
// Importa dependências
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Component({
selector: 'app-fimadotar',
templateUrl: './fimadotar.page.html',
styleUrls: ['./fimadotar.page.scss'],
})

export class FimadotarPage implements OnInit {

public id: string; // Armazena o ID do artigo a ser visualizado
public item: Observable<any>; // Armazena o artigo completo
public user: any; // Dados do usuário logado
items: Observable<any>;

constructor(
// Injeta dependência
private activatedRoute: ActivatedRoute,
private afs: AngularFirestore,
private router: Router,
public auth: AngularFireAuth,
) {

this.items = afs.collection('animais').valueChanges({ idField: 'id'});
// Obtém dados do usuário logado
this.auth.onAuthStateChanged((userData) => {
this.user = userData;
});
}

ngOnInit(): void {

// Obter o ID da rota e armazena em id
this.id = this.activatedRoute.snapshot.paramMap.get('petid');

// Obter o artigo do firestore à partir do ID
this.item = this.afs.doc(`animais/${this.id}`).valueChanges();

console.log(`animais/${this.id}`);
}
whatsapp(){
window.open('https://api.whatsapp.com/send?phone=5521979292693&text=Me%20interessei%20pelo%20seu%20pet');
}

}
