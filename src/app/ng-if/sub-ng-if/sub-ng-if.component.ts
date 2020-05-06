import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.css']
})
export class SubNgIfComponent implements OnInit {

  constructor() {
    console.log("Construiu o componente SubNgIfComponent")
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log("Destruiu o componente SubNgIfComponent")
  }

}
