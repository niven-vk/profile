import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavService } from './shared/sidenav.service';
import { DataService } from './shared/data.service';

import { FlexLayoutModule } from '@angular/flex-layout';


import { NavElemComponent } from './nav-elem/nav-elem.component';
import { DisplayComponent } from './display/display.component';
import { ItemOverviewComponent } from './item-overview/item-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavElemComponent,
    DisplayComponent,
    ItemOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    SidenavService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
