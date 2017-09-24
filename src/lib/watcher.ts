export class Watcher {
	private rock :object;
	private pool :object;
	constructor(rock:Object, pool:Array<object>){
		this.rock = rock;
		this.pool = pool;
	}
	public observe(callback:Function) {
		console.log('observe pool:', this.pool);
		let rock = this.rock;
		for(let alias in this.pool){
			let viewModel = this.pool[alias][0];
			console.log('observe viewmodel:', viewModel, callback);
			for(let attr in viewModel){
				let defaultValue = viewModel[attr];
				Object.defineProperty(viewModel, attr, {
	                get: function () {
	                    return defaultValue;
	                },
	                set: function (value) {
	                	defaultValue = value;
	                    console.log("do something after set a new value");
	                    callback.call(rock);
	                }
	            });
			}
            

		}
	}
}