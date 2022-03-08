import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ComputersComponent } from './computers/computers.component';
import { PrintersComponent } from './printers/printers.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { HttpClientModule } from '@angular/common/http';


const modules=[ MatSliderModule,MatListModule,MatGridListModule,MatCardModule,MatSidenavModule,
               MatTabsModule,MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule];

@NgModule({
  declarations: [AppComponent,HomeComponent,ComputersComponent,PrintersComponent, SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    modules,
  ], 
  exports: [modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
