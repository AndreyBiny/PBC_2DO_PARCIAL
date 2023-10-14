import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PBC_2DO_PARCIAL';

  hredondeado: string= '';
  vredondeado: string= '';

  calculo= {
    g: 0, 
    t: 0, 

  };

  resultados={
    h: 0,
    vf: 0,
    secs: 0,

  }

  calcular() {

    this.resultados.secs = ( this.calculo.t * 60 );

    this.resultados.h = this.calculo.g * (this.resultados.secs * this.resultados.secs) / 2;

    this.resultados.vf = this.calculo.g * this.resultados.secs;

    this.hredondeado = this.resultados.h.toFixed(0);
    this.vredondeado = this.resultados.vf.toFixed(0) + ' m/s^2';
  }

}

