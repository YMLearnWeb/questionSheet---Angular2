import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.route';
import { HomeComponent } from './Home/home.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { HeaderComponent } from './header/header.component';
import { SheetsComponent } from './sheets/sheets.component';
import { HelpComponent } from './Help/help.component';
import { SheetHeaderComponent } from './sheets/sheet-header/sheet-header.component';
import { SidebarComponent } from './sheets/sidebar/sidebar.component';
import { MainComponent } from './sheets/main/main.component';
import { QuestionComponent } from './sheets/shared/question/question.component';
import { TextquestionComponent } from './sheets/shared/textquestion/textquestion.component';

let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SheetsComponent,
    HelpComponent,
    SheetHeaderComponent,
    SidebarComponent,
    MainComponent,
    QuestionComponent,
    TextquestionComponent
  ],
  imports: [
    BrowserModule,
    rootRouterModule,
    HttpModule,
    CarouselModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
