import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomService } from '../service/dom.service';

@Component({
  moduleId: module.id,
  selector: 'landing',
  templateUrl: 'landing.component.html',
  styleUrls: [ 'landing.component.css' ],providers: [DomService]
})
export class LandingComponent implements OnInit {
	
  username = "";
  userpasswrd = "";  

 constructor(
    private router: Router,private domService: DomService) {
		 
	}

  ngOnInit(): void {
    
  }
  
  signIn(): void{
	  
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/