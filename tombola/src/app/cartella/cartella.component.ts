import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent implements OnInit {
  @Input()est_cartella : number = 0;
  @Input()vett_estratto : number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
