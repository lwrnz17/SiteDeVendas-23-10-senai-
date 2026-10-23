import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensagem = '';

  entrar(event: Event): void {
    event.preventDefault();
    this.mensagem = 'A tela está pronta, mas o login precisa ser conectado a um serviço de autenticação.';
  }
}
