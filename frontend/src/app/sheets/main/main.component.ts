import { Injectable, Component, OnInit, Input,OnChanges, SimpleChange } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { SheetService } from '../../core/sheet.service';
import { QuestionModel } from '../../model/sheet.model';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[SheetService]
})

export class MainComponent implements OnInit {

  constructor(private sheetService: SheetService) { }
  sheet;
  @Input() type;
  changeLog: string[] = [];

 ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //add Question
     console.log(changes.type.currentValue);
    if(changes.type.currentValue){
       console.log(changes.type.currentValue);
      let question : QuestionModel = {
        "question":"",
        "type":changes.type.currentValue,
        "answer":""
      } 
       this.sheetService.newQuestion(question,"0").subscribe(data=>console.log('data ' +data));
    }
  }
  //get sheetById
  getSheetById(id){
    this.sheetService.getSheetById(id).subscribe(data =>{this.sheet = data.contents});
  }

  ngOnInit() {
    this.getSheetById('0');
  }
}
