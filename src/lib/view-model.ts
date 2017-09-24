export class ViewModel {
	x :number = 0;
	y :number = 0;
	text :string = null;
	constructor(x, y, text){
		this.x = x;
		this.y = y;
		this.text = text;
	}
	move(e:Event){
		// console.log(e);
		this.x = e.pageX;
		this.y = e.pageY;
		console.log(this);
	}
}