import { Component, OnInit } from '@angular/core';

const tableData = [
  {
    tid: 1,
    active: 0,
    milestoneName: "milestone1",
    displaySec: "section1",
    progressStatus: 10,
    pstart: '12/03/2022',
    pend: '15/04/2022',
    astart: '18/03/2022',
    aend: '20/04/2022'
  },
  {
    tid: 2,
    active: 1,
    milestoneName: "milestone2",
    displaySec: "section2",
    progressStatus: 20,
    pstart: '12/03/2022',
    pend: '15/04/2022',
    astart: '18/03/2022',
    aend: '20/04/2022'
  },
  {
    tid: 3,
    active: 1,
    milestoneName: "milestone3",
    displaySec: "section3",
    progressStatus: 30,
    pstart: '12/03/2022',
    pend: '15/04/2022',
    astart: '18/03/2022',
    aend: '20/04/2022'
  },
  {
    tid: 4,
    active: 1,
    milestoneName: "milestone4",
    displaySec: "section4",
    progressStatus: 40,
    pstart: '12/03/2022',
    pend: '15/04/2022',
    astart: '18/03/2022',
    aend: '20/04/2022'
  },

]


@Component({
  selector: 'app-mat2-table',
  templateUrl: './mat2-table.component.html',
  styleUrls: ['./mat2-table.component.css']
})
export class Mat2TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['active','milestoneName', 'displaySec', 'progressStatus', 'pstart', 'pend', 'astart', 'aend','tid'];
  // displayedColumns: string[] = ['active', 'milestoneName', 'displaySec', 'progressStatus', 'pstart', 'pend'];
  dataSource = tableData;

}
