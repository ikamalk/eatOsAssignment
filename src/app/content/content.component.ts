import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  employees = new FormControl();
  revenus = new FormControl();
  employeeList: string[] = ['All', 'Brandon Lakes', 'James Lang', 'Jose Hernandez', 'Lulu Liu'];
  revenusList: string[] = ['All', 'Revenue Center 1', 'Revenue Center 2', 'Revenue Center 3', 'Revenue Center 4'];
  displayedColumns: string[] = ['types', 'qrv', 'amount', 'tip'];
  dataSource = [
    {types: "VISA", qrv: 12, amount: 9458.4, tip: 9458.4},
    {types: "MASTER", qrv: 12, amount: 400.26, tip: 69.41},
    {types: "AMEX", qrv: 12, amount: 69.41, tip: 108.11},
    {types: "DISCVR", qrv: 12, amount: 90.122, tip: 1201.07},
    {types: "Bruincard", qrv: 12, amount: 108.11, tip: 9458.4,},
    {types: "QSA", qrv: 12, amount: 1201.07, tip: 90.122},
    {types: "CASH", qrv: 12, amount: 14.0067, tip: 400.26},
    {types: "TIPS", qrv: 12, amount: 159.994, tip: 69.41},
  ];;
  constructor() { }

  ngOnInit(): void {
  }

}
