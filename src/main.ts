import { sayHello } from "./greet";
import { Rock } from "./lib/Rock";
import { ViewModel } from "./lib/view-model"

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

console.log('hey, it is me???');

// showHello("greeting", "TypeScript update");
let myRock = new Rock('rock');
let viewModel = new ViewModel(50,100,'I am ViewModel!');
myRock.registerViewModel('vm', viewModel);
myRock.init();
window.viewModel = viewModel;
viewModel.x = 200;
viewModel.x = 400;
// setInterval("viewModel.x += 5;", 1000);
