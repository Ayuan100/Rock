import { Rock } from "../src/lib/Rock";
import { expect } from 'chai';

console.log('going to test');
describe('test', function(){
	it('first it', function(){
		let rock = new Rock('test');
		expect(rock).to.be.an('object');
	});
});