import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core'


export interface InBuiltElements {}

@Injectable()
export class DomService {
	
	public changeDomEvent:EventEmitter<InBuiltElements>;
	
	private static _emitters: { [ID: string]: EventEmitter<any> } = {};

	 static get(ID: string): EventEmitter<InBuiltElements> {
		if (!this._emitters[ID]) 
			this._emitters[ID] = new EventEmitter();
			return this._emitters[ID];
	 }
	
	
	static dom: InBuiltElements =  [
		{id: 1, name: 'Text Box',count: 1,src:''},
		{id: 2, name: 'Radio Button',count: 1,src:'<label> Yes </label><input type="radio" value="Yes" name="chose"><label> No </label><input type="radio" value="No" name="chose">'},
		{id: 3, name: 'Select Box',count: 1,src:'<select><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select>'},
		{id: 4, name: 'Check Box',count: 1,src:''},
		{id: 5, name: 'Text Area',count: 1,src:''},
		{id: 5, name: 'Auto Complete',count: 1,src:''}
	];
	
	constructor() {
        this.changeDomEvent = new EventEmitter();
    }
	
	domSelectedItemsMap: InBuiltElements =  [];
	
	getDomElements(): Promise<[]> {
		return Promise.resolve(DomService.dom);
	}
	
	addToDomSelected(value,command): void{
		for (let item of DomService.dom) {
			if(item.name === value && command === true){
				item.count++;
			}	
			else if(item.name === value && command === false)
			{
				if(item.count >0)	
				item.count--;	
			}
		}
		return Promise.resolve(DomService.dom);
	}
	
	removeAll(value): void{
		for (let item of DomService.dom) {
			if(item.name === value)
			{
				item.count=0;
			}
		}
	}	
}