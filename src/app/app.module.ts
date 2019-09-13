import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { BodyComponent } from './home/body/body.component';
import { TableComponent } from './home/body/table/table.component';
import { GraphicalRepComponent } from './home/body/graphical-rep/graphical-rep.component';
import { AddDataComponent } from './home/body/table/add-data/add-data.component';
import { EditDataComponent } from './home/body/table/edit-data/edit-data.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {InventoryService} from './inventory.service';
import { HttpClientModule } from '@angular/common/http';
import { PageDoesntExistComponent } from './page-doesnt-exist/page-doesnt-exist.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    NavComponent,
    BodyComponent,
    TableComponent,
    GraphicalRepComponent,
    AddDataComponent,
    EditDataComponent,
    PageDoesntExistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule, 
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
