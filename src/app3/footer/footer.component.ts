import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: [ 'footer.component.css' ]
})
export class FooterComponent implements OnInit {
	
	constructor(
    private router: Router) {
		 
	}

  ngOnInit(): void {
    
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/