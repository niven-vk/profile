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
import { CodingComponent } from './display/coding/coding.component';
import { ContactComponent } from './display/contact/contact.component';
import { HobbiesComponent } from './display/hobbies/hobbies.component';
import { GithubComponent } from './display/github/github.component';


import {MatTooltipModule} from '@angular/material/tooltip'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavElemComponent,
    DisplayComponent,
    ItemOverviewComponent,
    CodingComponent,
    ContactComponent,
    HobbiesComponent,
    GithubComponent
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
    FlexLayoutModule,
    MatTooltipModule
    

  ],
  providers: [
    SidenavService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
