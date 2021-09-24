import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-vini';
  links = [
    { path: 'home', label: 'Lista de Cotação', isActive: true}]
    // { path: 'register', label: 'Adicionar novo Cliente', isActive: true},
    // { path: 'edit', label: 'Editar Cliente', isActive: false}]
  activeLink = this.links[0]

  ngOnInit() {

  }

}