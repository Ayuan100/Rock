import { Scanner } from "./scanner";
import { Watcher } from "./watcher";
import { Renderer } from "./renderer";
import { ViewModel } from "./view-model";
import { Map } from "./map"

// Rock directive class
export class Rock {
	
	prefix:string = 'rock-'; //默认为rock-

	private viewModelPool :object = {};
	private mapList :Array<Map>;
	// private rockElements:Array<HTMLElement>;


	private scanner :Scanner;
	private watcher :Watcher;
	private renderer : Renderer;

	

	constructor() {}
	
	// 把注册的viewmodel加入pool
	public registerViewModel( alias:string, model: object){
		console.log('register view model: ', alias);
		if(this.viewModelPool[alias]) this.viewModelPool[alias].push(model);
		else this.viewModelPool[alias] = new Array(model);
		console.log('Current viewModelPool:',this.viewModelPool);
	}

	// 初始化，可指定prefix
	public init(prefix ?: string){

		console.log('init Rock---------------');

		if(prefix) this.prefix = prefix + '-';

		this.scanner = new Scanner(this);	

		this.watcher = new Watcher(this, this.viewModelPool);
		
		this.mapList = this.scanner.scan();
		console.log('maplist:', this.mapList);
		
		this.renderer = new Renderer(this, this.mapList);

		this.watcher.observe(this.render);
		this.render();

		console.log('finish init Rock------------');
		// this.watcher.observe(this.rockElements);
	}
	
	public getViewModel(alias :string){
		return this.viewModelPool[alias][0];
	}
	public render(){
		this.renderer.renderAll();
	}

}


