import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppRoutingModule }     from './routes/app-routing.module';

import { LandingComponent }   from './landing/landing.component';
import { AutoComponent }   from './autocomplete/auto.component';
import { FilterComponent }   from './filter/filter.component';
import { DisplayComponent }   from './display/display.component';
import { HeaderComponent }   from './header/header.component';


@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    AppRoutingModule ],
  declarations: [ AppComponent,LandingComponent,AutoComponent,FilterComponent,DisplayComponent,HeaderComponent],
  bootstrap:    [ AppComponent]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/