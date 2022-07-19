import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {state: 1, utility: 'Hydrogen', data1: 1.0079, data2: 'H',data3: 'H'},
  {state: 1, utility: 'Hydrogen', data1: 1.0079, data2: 'H',data3: 'H'}
  
];
@Component({
  selector: 'app-mat1-table',
  templateUrl: './mat1-table.component.html',
  styleUrls: ['./mat1-table.component.css']
})
export class Mat1TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['state', 'company', 'data1', 'data2', 'data3'];
  dataSource = ELEMENT_DATA;
}
