import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomService } from '../service/dom.service';

@Component({
  moduleId: module.id,
  selector: 'filter-display',
  templateUrl: 'filter.component.html',
  styleUrls: [ 'filter.component.css' ],providers: [DomService]
})
export class FilterComponent implements OnInit,OnChanges {

  @Input() id: string;
  
  filterCollection: [];		
  constructor(
    private router: Router,private domService: DomService) {
		 domService.changeDomEvent.subscribe((data) => {
			 console.log("s");
		 });
	}
	
  ngOnChanges() {
    DomService.get(this.id).subscribe((data) => {
			this.populateFilters();
	});
  }	
  
 
  ngOnInit(): void {
	this.populateFilters();
  }
  
  populateFilters(): void{
	this.domService.getDomElements().then((data) => {
		console.log(data);
		this.filterCollection= data;
	});  
  }
 
  removeAll(value):void{
	  this.domService.removeAll(value);
	  DomService.get(this.id).emit(value);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/