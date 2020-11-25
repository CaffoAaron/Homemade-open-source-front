import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface MenElement {
  name: string;
  date: any;
}
const ELEMENT_DATA: MenElement[] = [
  {name: 'Papa Rellena', date: '25/03/2020'},
  {name: 'Ceviche de Pollo', date: '23/04/2020'},
  {name: 'Tallarines Rojos', date: '25/05/2020'}
];
@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.css']
})

export class MenuTableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fecha', 'ver receta', 'editar receta'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
