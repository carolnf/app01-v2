import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.page.html',
  styleUrls: ['./duvidas.page.scss'],
})
export class DuvidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const acc = document.getElementsByClassName('accordion');
    let i: number;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
  }
}
