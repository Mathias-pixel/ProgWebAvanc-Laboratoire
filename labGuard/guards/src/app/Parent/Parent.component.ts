import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Parent',
  templateUrl: './Parent.component.html',
  styleUrls: ['./Parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  sucress: boolean = false;
  saleess: boolean = false

  sucres() {

    if (this.sucress) {
      localStorage.setItem("sucress", "true");
    }
    else {
      localStorage.removeItem("sucress");
    }

  }

  salees() {
    if (this.saleess) {
      localStorage.setItem("saleess", "true");
    }
    else {
      localStorage.removeItem("saleess");
    }
  }

  ngOnInit() {
    this.saleess = localStorage.getItem("saleess") != null;
    this.sucress = localStorage.getItem("sucress") != null;

  }

}
