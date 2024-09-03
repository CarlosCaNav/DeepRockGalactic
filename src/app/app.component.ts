import { NgStyle } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DeepRockGalactic';

  idioma: string = "original"; /* original es Inglés */

  barajas: any = {
    evento: { numeroCartas: 36, usadas: [] },
    horda: { numeroCartas: 15, usadas: [] },
    rockStone: { numeroCartas: 20, usadas: [] },
    municion: { numeroCartas: 9, usadas: [] },
  };
  
  /* carta en pantalla */
  rotacion: number = 0;
  enves: boolean = true;
  cartaElegida: number = 0;
  tipoDeCarta: string = "evento";
  urlCarta: string = "/cartas/enves/evento.jpeg";

  elegirBaraja(selecion: string) {
    this.urlCarta = "/cartas/enves/" + selecion + ".jpeg";
    this.tipoDeCarta = selecion;
    this.enves = true;
  }

  sacarCarta() {
    if (this.enves) {

      this.gestionarCarta(this.tipoDeCarta);

      if (this.cartaElegida > 0) {
        this.rotacion=1800;
        setTimeout(() => {
          this.urlCarta = "cartas/" + this.tipoDeCarta + "/" + this.idioma + "/" + this.cartaElegida + ".jpeg";
          console.log("cartas/" + this.tipoDeCarta + "/" + this.idioma + "/" + this.cartaElegida + ".jpeg");
        }, 500);
        this.enves = false;
      }
      else { this.urlCarta = "/cartas/vacio.jpeg" }
    }
    else {
      this.rotacion = 0;
      setTimeout(() => {
        this.urlCarta = "/cartas/enves/" + this.tipoDeCarta + ".jpeg";
      }, 150);
      this.enves = true;
    }

  }

  gestionarCarta(tipoCarta:string) {
    var longitudBaraja = this.barajas[tipoCarta].usadas.length;

    var bucleFuncionando = longitudBaraja < this.barajas[tipoCarta].numeroCartas;

    if (!bucleFuncionando) {
      if (window.confirm("No te quedan cartas de evento ¿Quieres barajar el mazo?")) {
        this.barajas[tipoCarta].usadas = [];
      }
    }

    while (bucleFuncionando) {
      this.cartaElegida = Math.floor(Math.random() * (this.barajas[tipoCarta].numeroCartas)) + 1;

      if (!this.barajas[tipoCarta].usadas.includes(this.cartaElegida)) {
        this.barajas[tipoCarta].usadas.push(this.cartaElegida);
        bucleFuncionando = false;
      }
    }
  }
}
