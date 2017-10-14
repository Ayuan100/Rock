import { Map } from "./map"
export class Renderer {
	private rock :object;
	private mapList : Array<Map>;
	constructor(rock :object, mapList :Array<Map>){
		this.rock = rock;
		this.mapList = mapList;
		console.log('new renderer');
	}
	public renderAll(){
		console.log('render all');
		if(this.mapList){
			for( let i = 0; i < this.mapList.length; i++){
				this.render(this.mapList[i]);
			}
		}
	}
	// 给HTML element设置相应的attr和event
	public render(map :Map){
		// console.log('render');
		let list = map.mappingList;
		let element = map.element;
		for(let i = 0; i < list.length; i++){
			let mapping = list[i];
			let viewmodel = mapping.viewmodel;
			console.log('render- ',mapping.rock_attr, 'in ', mapping);
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
				case 'color':
					element.style.color = viewmodel[mapping.vm_attr];
					break;
				case 'onmousemove':
					element.onmousemove = viewmodel[mapping.vm_attr];
					break;
				case 'onmousedown':
					element.onmousedown = viewmodel[mapping.vm_attr];
					break;
				default:
					console.log(mapping.rock_attr, ' attr to add');
					break;
			}
		}
	}

}