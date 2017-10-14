import { Rock } from "./lib/Rock";
import { ViewModel, TestViewModel } from "./lib/view-model"


let myRock = new Rock();
let testViewModel = new TestViewModel('I am Moving Every Second, click me!');

myRock.registerViewModel('vm', testViewModel);
myRock.init();


testViewModel.x = 100;
setInterval(
	(function(){
		if(this.x < 50){
			if(this.y < 50) this.x += 50;
			else this.y -=50;
		} 
		else{
			if(this.y < 50) this.y += 50;
			else this.x -= 50;
		} 
	}).bind(testViewModel), 
	1000);
