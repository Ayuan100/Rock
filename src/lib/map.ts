
export class Map{
	element :HTMLElement;
	mappingList :Array<Mapping>;
	constructor(element:HTMLElement, list:Array<Mapping>){
		this.element = element;
		this.mappingList = [];
		if(list) this.mappingList = list;
	}
}

export class Mapping{
	viewmodel :object;
	rock_attr :string;
	vm_attr : string;
	constructor(rock_attr:string, viewmodel:object, vm_attr:string){
		this.viewmodel = viewmodel;
		this.rock_attr = rock_attr;
		this.vm_attr = vm_attr;
	}
}