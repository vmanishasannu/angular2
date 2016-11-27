import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomService } from '../service/dom.service';

@Component({
  moduleId: 'autocomplete',
  selector: 'auto-complete',
  templateUrl: 'auto.component.html',
  styleUrls: [ 'auto.component.css' ],
  providers: [DomService]
})
export class AutoComponent implements OnInit,OnChanges  {
	
  @Input() id: string;
  
  searchtext="";
  elementsCollection = [];
  originalCollection = [];
  countsCollection=[];

  constructor(
    private router: Router,private domService: DomService) {	
  }
  
  /*Get all dom elements and populate the list */
  populateElements(): void {
	  this.domService.getDomElements().then((data) => {
		let index =0;  
		for (let item of data) {
			this.originalCollection[index] = item.name;
			this.countsCollection[index] = item.count;
			index++;
		}
		 
		index = 0;
		for (let entry of this.originalCollection) {
			this.elementsCollection[index++] = entry;
		}		
	  });
  }
  
  ngOnInit(): void {
    this.populateElements();
  }
  
  /*Handle events*/
  ngOnChanges() {
    DomService.get(this.id).subscribe((data) => {
			this.populateElements();
	});
  }	
  
  /*Main Autocomplete logic*/
  filterList(event): void{
	var matches = this.originalCollection.filter(function(windowValue){
	  if(windowValue) {
		  return windowValue.indexOf(event) >= 0;
	  }
	}); //["id-3-text", "3-id-text"]
	this.elementsCollection = matches;
  }
  
  addElement(event,item): void{
	  this.domService.addToDomSelected(item,event).then((data)=>{
			this.populateElements();
			DomService.get(this.id).emit(data);
			
	  });
  }
  
  clearAll():void{
	this.domService.clearAll(); 
	DomService.get(this.id).emit(DomService.dom);	
	this.populateElements();
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/