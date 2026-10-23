import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  mensagemCompra = '';

  avisarCompra(jogo: string): void {
    this.mensagemCompra = `${jogo} selecionado! O processo de compra ainda não está conectado a um sistema de pagamento.`;
  }
}
