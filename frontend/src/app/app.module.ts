import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.route';
import { HomeComponent } from './Home/home.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { SheetsComponent } from './sheets/sheets.component';
import { HelpComponent } from './Help/help.component';
import { SheetHeaderComponent } from './sheets/sheet-header/sheet-header.component';

let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SheetsComponent,
    HelpComponent,
    SheetHeaderComponent
  ],
  imports: [
    BrowserModule,
    rootRouterModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
