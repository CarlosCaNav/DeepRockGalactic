import { Component } from '@angular/core';
import { push } from '@angular/fire/database';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DeepRockGalactic';

  idioma: string = "original"; /* original es Inglés */

  /* numero de cartas */
  evento: number = 38;
  horda: number = 15;
  rockStone: number = 20;
  municion: number = 9;

  /* cartas mostradas */
  eventoMostradas: [] = [];
  hordaMostradas: [] = [];
  rockStoneMostradas: [] = [];
  municionMostradas: [] = [];

  /* carta en pantalla */
  tipoDeCarta: string = "evento";
  urlCarta: string = "/cartas/enves/municion.jpeg";


  tipo(selecion: string) {
    this.urlCarta = "/cartas/enves/" + selecion + ".jpeg";
    this.tipoDeCarta = selecion;
  }


  resultado() {
    var numeroDeCartas: number = 0;
    var resultado: number = 0;

    switch (this.tipoDeCarta) {
      case "evento":
        numeroDeCartas = this.evento;

        break;
      case "horda":
        numeroDeCartas = this.horda;
        break;
        case "rockstone":
          numeroDeCartas = this.rockStone;
          break;
      case "municion":
        numeroDeCartas = this.municion;
        break;
        default:
          window.alert("algo falla");
    }
    resultado = Math.floor(Math.random() * (numeroDeCartas - 1 + 1)) + 1;

this.urlCarta="cartas/"+this.tipoDeCarta+"/"+this.idioma+"/"+resultado+".jpeg";
console.log("cartas/"+this.tipoDeCarta+"/"+this.idioma+"/"+resultado+".jpeg");

  }
}
