import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.linkTheme.setAttribute('href', url);
  }

  changetheme = (theme: string) => {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();


  }

  // utilizamos vanillaJs para hacer refrencia a un elemento
  // HTML y luego cambiamos su atributo para poder cambiar el tema de forma dinamica

  checkCurrentTheme = () => {
    const links = document.querySelectorAll('.selector');
    links.forEach((elem) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
