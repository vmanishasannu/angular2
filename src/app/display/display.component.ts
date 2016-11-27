import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomService } from '../service/dom.service';

@Component({
  moduleId: 'display',
  selector: 'dom-display',
  templateUrl: 'display.component.html',
  styleUrls: [ 'display.component.css' ],providers: [DomService]
})
export class DisplayComponent implements OnInit,OnChanges {

  @Input() id: string;
  
  displayCollection: [];		
  constructor(
    private router: Router,private domService: DomService) {
	}
	
  ngOnChanges() {
    DomService.get(this.id).subscribe((data) => {
	});
  }	
  
 
  ngOnInit(): void {
	this.populateUI();
  }
  
  /*Populate UI of the elements to be rendered*/
  populateUI(): void{
	this.domService.getDomElements().then((data) => {
		this.displayCollection= data;
	});  
  }
  
  /*Populate UI of the elements to be rendered*/
  getNumber(num):void{
    return new Array(num);   
  }
  
  /*Add buton on the rendered elements*/
  addMore(name):void{
	  this.domService.addToDomSelected(name,true).then((data)=>{
			this.populateUI();
			DomService.get(this.id).emit(data);			
	  });
  }
  
  /*Delete button on the rendered elements*/
  deleteOne(name):void{
	 this.domService.addToDomSelected(name,false).then((data)=>{
			this.populateUI();
			DomService.get(this.id).emit(data);			
	  });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/