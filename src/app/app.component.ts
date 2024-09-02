import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { push } from '@angular/fire/database';
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

  /* numero de cartas */
  evento: number = 36;
  horda: number = 15;
  rockStone: number = 20;
  municion: number = 9;

  /* cartas repetidas */
  eventoUsadas: number[] = [];
  hordaUsadas: number[] = [];
  rockStoneUsadas: number[] = [];
  municionUsadas: number[] = [];


  /* carta en pantalla */
  rotacion: number = 90;
  enves: boolean = true;
  tipoDeCarta: string = "evento";
  urlCarta: string = "/cartas/enves/evento.jpeg";


  tipo(selecion: string) {
    this.urlCarta = "/cartas/enves/" + selecion + ".jpeg";
    this.tipoDeCarta = selecion;
    this.enves = true;
  }


  resultado() {
    var numeroDeCartas: number = 0;
    var resultado: number = 0;
    var buclefuncionando: boolean = false;

    if (this.enves == true) {
      switch (this.tipoDeCarta) {
        case "evento":
          numeroDeCartas = this.evento;
          if (this.eventoUsadas.length <= numeroDeCartas - 1) {
            buclefuncionando = true
          }
          else { if (window.confirm("No te quedan cartas de evento ¿Quieres barajar el mazo?")) { this.eventoUsadas = [] } }
          while (buclefuncionando) {
            resultado = Math.floor(Math.random() * (numeroDeCartas - 1 + 1)) + 1;
            if (!this.eventoUsadas.includes(resultado)) {
              this.eventoUsadas.push(resultado);
              buclefuncionando = false;
            }
          }
          break;
        case "horda":
          numeroDeCartas = this.horda;
          if (this.hordaUsadas.length <= numeroDeCartas - 1) {
            buclefuncionando = true
          }
          else { if (window.confirm("No te quedan cartas de horda ¿Quieres barajar el mazo?")) { this.hordaUsadas = [] } }
          while (buclefuncionando) {
            resultado = Math.floor(Math.random() * (numeroDeCartas - 1 + 1)) + 1;
            if (!this.hordaUsadas.includes(resultado)) {
              this.hordaUsadas.push(resultado);
              buclefuncionando = false;
            }
          }
          break;
        case "rockstone":
          numeroDeCartas = this.rockStone;
          if (this.rockStoneUsadas.length <= numeroDeCartas - 1) {
            buclefuncionando = true
          }
          else { if (window.confirm("No te quedan cartas rockstone ¿Quieres barajar el mazo?")) { this.rockStoneUsadas = [] } }
          while (buclefuncionando) {
            resultado = Math.floor(Math.random() * (numeroDeCartas - 1 + 1)) + 1;
            if (!this.rockStoneUsadas.includes(resultado)) {
              this.rockStoneUsadas.push(resultado);
              buclefuncionando = false;
            }
          }
          break;
        case "municion":
          numeroDeCartas = this.municion;
          if (this.municionUsadas.length <= numeroDeCartas - 1) {
            buclefuncionando = true
          }
          else { if (window.confirm("No te quedan cartas de munición ¿Quieres barajar el mazo?")) { this.municionUsadas = [] } }
          while (buclefuncionando) {
            resultado = Math.floor(Math.random() * (numeroDeCartas - 1 + 1)) + 1;
            if (!this.municionUsadas.includes(resultado)) {
              this.municionUsadas.push(resultado);
              buclefuncionando = false;
            }
          }
          break;
        default:
          window.alert("algo falla");
      }

      if (resultado != 0) {
        this.urlCarta = "cartas/" + this.tipoDeCarta + "/" + this.idioma + "/" + resultado + ".jpeg";
        console.log("cartas/" + this.tipoDeCarta + "/" + this.idioma + "/" + resultado + ".jpeg");

        this.enves = false;
      }
      else{this.urlCarta = "/cartas/vacio.jpeg"}
    }
    else {
      this.urlCarta = "/cartas/enves/" + this.tipoDeCarta + ".jpeg"
      this.enves = true;
    }

  }
}
