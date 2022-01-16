import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tombola';
  estratto : number = 0;
  vett_estratto : number[] = [];
  estrai(numero : HTMLInputElement){

    console.log(numero.value);
    this.estratto = Number(numero.value);
    this.vett_estratto.push(this.estratto);
  }
}
