var expect = require("chai").expect;

describe('Person', function(){
	let newPerson;
	before(function(){
		newPerson = new Person();
	});

	it('should be a function', function(){
		expect(newPerson).to.be.a('function');
	});
	
	it('should have name property', function(){
		expect(newPerson).to.have.property('name');
	});

	it('should have name property value', function(){
		expect(newPerson.name).to.equal('John');
	});

	it('should have age property', function(){
		expect(newPerson).to.have.property('age');
	});
	it('should have age property value', function(){
		expect(newPerson.age).to.equal('21');
	});

	it('should have sayHello property', function(){
		expect(newPerson).to.have.property('sayHello');
	});

	it('sayHello should be a method', function(){
		expect(newPerson.sayHello).to.equal('Hello!');
	});

	it('should have sayName property', function(){
		expect(newPerson).to.have.property('sayName');
	});

	it('sayName should be a method', function(){
		expect(newPerson.sayName).to.equal('My name is ' + newPerson.name);
	});

	it('should have sayAge property', function(){
		expect(newPerson).to.have.property('sayAge');
	});

	it('sayAge should be a method', function(){
		expect(newPerson.sayAge).to.equal('I am ' + newPerson.age + ' years old.');
	});


});