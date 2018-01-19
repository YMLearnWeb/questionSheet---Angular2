import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

  constructor() { }
  type;
  
  insertQuestionOn(q){
    	this.type = q;   	
    }

  ngOnInit() {
  }

}
