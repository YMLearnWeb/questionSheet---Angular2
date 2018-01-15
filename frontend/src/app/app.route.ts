import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { HelpComponent } from './Help/help.component';
import { SheetsComponent } from './sheets/sheets.component';


export const rootRouterConfig: Routes = [
	{path:'',component:HomeComponent},
	{path:'home',component:HomeComponent},
	{path:"help",component:HelpComponent},
	{path:"mysheet",component:SheetsComponent}
]
