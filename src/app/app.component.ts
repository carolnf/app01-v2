import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Doar', url: '/logindoar', icon: 'add-circle' },
    { title: 'Perfil', url: '/notificacao', icon: 'person-circle' },
    { title: 'Dúvidas', url: '/duvidas', icon: 'help-circle' },
    { title: 'Suporte', url: '/suporte', icon: 'information-circle' },
  ];
  constructor(public auth: AngularFireAuth) {}
}
