import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

items = [
	{
		"title":"Home",
		"link":'/home'
	},
	{
		"title":"My Sheet",
		"link":'/mysheet'
	},
	{
		"title":"Help",
		"link":'/help'
	}
]
  constructor() { }

  ngOnInit() {
  }

}
