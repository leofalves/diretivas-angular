import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Belo Horizonte", state: "MG" },
    { name: "Vitória", state: "ES" }
  ];

  clients = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age: this.age
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "";
    this.address = "";
    this.phone = "";
    this.city = "";
    this.age = null;
  }

  delete(i: number) {
    this.clients.splice(i, 1);
    //console.log("delete " + i);
  }

}
