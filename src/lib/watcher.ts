export class Watcher {
	private rock :Object;
	private pool :Object;
	constructor(rock:Object, pool:Object){
		this.rock = rock;
		this.pool = pool;
		console.log('new watcher:',this);
	}
	// 给pool力的所有attr添加set和get函数
	public observe(callback:Function) {
		console.log('going to observe pool:', this.pool);
		let rock = this.rock;
		// let test:Object ={a:1,b:1};
		for(let alias in this.pool){
			let viewModel = this.pool[alias][0];
			console.log('----observe viewmodel:', viewModel, callback);
			for(let attr in viewModel){
				let defaultValue = viewModel[attr];
				Object.defineProperty(viewModel, attr, {
	                get: function () {
	                    return defaultValue;
	                },
	                set: function (value) {
	                	defaultValue = value;
	                    console.log("do something after set a new value on ",alias,'-',attr);
	                    callback.call(rock);
	                }
	            });
			}
            

		}
	}
}