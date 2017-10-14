export interface ViewModel {
	x?: number;
	y?: number;
	text?: string;
	color?: string;
	onmousemove?(e: MouseEvent);
	onmousedown?(e: MouseEvent);
}

export class TestViewModel implements ViewModel{
	x = 0;
	y = 0;
	text = null;
	color = 'red';
	constructor(text){
		this.text = text;
	}
	onmousedown = (function(e :MouseEvent){
		// console.log(e);
		if(this.color == 'red') this.color = 'blue';
		else this.color = 'red';
		console.log('onmousedown');
	}).bind(this);
}