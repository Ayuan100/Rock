import { Scanner } from "./scanner";
import { Watcher } from "./watcher";
import { Renderer } from "./renderer";
import { ViewModel } from "./view-model";
import { Map } from "./map"

export let Rock = class Rock {
	
	prefix:string = 'rock-';
	private scanner :Scanner;
	private watcher :Watcher;
	private viewModelPool :object;
	private mapList :Array<Map>;
	private renderer : Renderer;

	private rockElements:Array<HTMLElement>;


	constructor(prefix:string) {
		if(prefix) this.prefix = prefix + '-';
		this.scanner = new Scanner(this);
		this.viewModelPool = {};
		
		
	}

	// 把注册的viewmodel加入pool
	public registerViewModel( alias:string, model: object){
		console.log('register view model: ', alias);
		if(this.viewModelPool[alias]) this.viewModelPool[alias].push(model);
		else this.viewModelPool[alias] = new Array(model);
		console.log(this.viewModelPool);
	}
	public getViewModel(alias :string){
		return this.viewModelPool[alias][0];
	}
	public init(){
		console.log('init---------------');
		this.watcher = new Watcher(this, this.viewModelPool);
		console.log('new watcher:', this.watcher);
		this.watcher.observe(this.render);

		// console.log('?');
		this.mapList = this.scanner.scan();
		this.renderer = new Renderer(this, this.mapList);
		this.render();

		// this.watcher.observe(this.rockElements);
	}
	public render(){
		console.log('render',this);
		if(this.mapList){
			for( let i = 0; i < this.mapList.length; i++){
				this.renderer.render(this.mapList[i]);
			}
		}
	}


}


