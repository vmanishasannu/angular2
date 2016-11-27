import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './routes/app-routing.module';
import { LandingComponent }   from './landing/landing.component';
import { AutoComponent }   from './autocomplete/auto.component';
import { FilterComponent }   from './filter/filter.component';
import { DisplayComponent }   from './display/display.component';
import { HeaderComponent }   from './header/header.component';


@NgModule({
  declarations: [ AppComponent,LandingComponent,AutoComponent,FilterComponent,DisplayComponent,HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
