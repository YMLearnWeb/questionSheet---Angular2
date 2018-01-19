import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TextquestionComponent } from '../shared/textquestion/textquestion.component';
import { QuestionType } from '../../model/questiontype';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() insertQuestion_emit = new EventEmitter();
  questions = QuestionType;

  insertQuestion(q){
    //add this question to the sheet question list
   this.insertQuestion_emit.emit(q.key);
  }
}
