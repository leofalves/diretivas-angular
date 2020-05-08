import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "bob", role: "admin", lastlogin: new Date('4/22/2020') },
    { login: "lia", role: "admin", lastlogin: new Date('8/5/2020') },
    { login: "john", role: "user", lastlogin: new Date('3/20/2020') },
    { login: "robin", role: "user", lastlogin: new Date('4/13/2020') },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
