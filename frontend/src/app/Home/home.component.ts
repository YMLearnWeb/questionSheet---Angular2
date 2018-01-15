import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	slides = [
		{desc: 'The Best!'},
		{desc: 'The Newest!'},
		{desc: 'The Powerful'}
	]
  constructor() { }

  ngOnInit() {
  }

}
