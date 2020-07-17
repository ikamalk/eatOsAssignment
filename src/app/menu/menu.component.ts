import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface node {
  name: string;
  children?: node[];
}

const TREE_DATA: node[] = [
  {
    name: ' Home',
  }, {
    name: 'Restaurant',
    children: [
      {
        name: 'Restaurant',
       
      },
    ]
  },
  {
    name: ' Sales',
    children: [
      {name: 'Sales'},
    ]
  },{
  name: ' Menus',
  children: [
    {name: 'Menus'},
  ]
},
{
  name: ' Employees',
  children: [
    {name: 'Employees'},
  ]
},
{
  name: ' Customers',
  children: [
    {name: 'Customers'},
  ]
},
{
  name: ' Reports',
  children: [
    {name: 'Sale'},
    {name: 'Labor',
    children: [
      {name: 'Employee'},
      {name: 'Role'},
      {name: 'Cashout'},
      {name: 'ADP Payroll'},
      {name: 'Payroll'},

    ]
  
  },
  {name: ' Comp',
  children: [{name:'Comp'}]
},
{name: ' Products',
children: [{name:'Products'}]
},
{name: ' Operating',
children: [{name:'Operating'}]
},
  ]
},
{
  name: ' Online Storefront',
},
{
  name: ' Account Settings',
  children: [
    {name: 'Account Settings'},
  ]
},
{
  name: ' Feedback',
},
{
  name: ' Sign Out'
}
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  treeControl = new NestedTreeControl<node>(node => node.children);
  dataSources = new MatTreeNestedDataSource<node>();
  activeNode:any;

  constructor() {
    this.dataSources.data = TREE_DATA;

  }
  hasChild = (_: number, node: node) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
