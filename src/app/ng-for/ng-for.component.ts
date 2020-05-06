import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  Beatles = [
    "John",
    "Paul",
    "George",
    "Ringo"
  ];

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Belo Horizonte", state: "MG" },
    { name: "Vitória", state: "ES" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
