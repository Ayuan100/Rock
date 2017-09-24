import { Map } from "./map"
export class Renderer {
	private rock :object;
	private mapList : Array<object>;
	constructor(rock :object, mapList :Array<object>){
		this.rock = rock;
		this.mapList = mapList;
	}
	public render(map :Map){
		console.log('render');
		let list = map.mappingList;
		let element = map.element;
		for(let i = 0; i < list.length; i++){
			let mapping = list[i];
			let viewmodel = mapping.viewmodel;
			// console.log(viewmodel);
			switch(mapping.rock_attr){
				case 'text':
					element.innerHTML = viewmodel[mapping.vm_attr];
					break;
				case 'x':
					element.style.left = viewmodel[mapping.vm_attr] + 'px';
					// console.log(element.style['left']);
					break;
				case 'y':
					element.style.top = viewmodel[mapping.vm_attr] + 'px';
					break;
				case 'onmousemove':
					element.onmousemove = viewmodel.move;
				default:
					console.log(mapping.rock_attr, ' to render');
					break;
			}
		}
	}

}