//Unit test file for the three problems
const {describe, it} = require('mocha');
const{expect} = require('chai');

//Problem 1
const {reverseAlph} = require('./PS1.P1');
describe('Two Tests for Problem 1', ()=>{
    it('it should return fedcba when passed bdaefc', ()=>{
        let reverse = reverseAlph('bdaefc');
        expect(reverse).to.be.equal('fedcba');
    })
    it('it should return fedcba when passed supercalifragilisticexpialidocious', ()=>{
        let reverse = reverseAlph('supercalifragilisticexpialidocious');
        expect(reverse).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    })
})

//Problem 2
const {evaluate} = require('./PS1.P2');
describe('Tests with different Operators for Problem 2', ()=>{
    it('it should return a function with + when passed 4+2', ()=>{
        const expression = '4+2';
        let operator = evaluate(expression);
        expect(operator(4,2)).to.be.equal(6);
    })
    it('it should return a function with * when passed 5*7', ()=>{
        const expression = '5*7';
        let operator = evaluate(expression);
        expect(operator(5,7)).to.be.equal(35);
    })
    it('it should return a function with - when passed 6-1', ()=>{
        const expression = '6-1';
        let operator = evaluate(expression);
        expect(operator(6,1)).to.be.equal(5);
    })
    it('it should return a function with / when passed 9/2', ()=>{
        const expression = '9/2';
        let operator = evaluate(expression);
        expect(operator(9,2)).to.be.equal(4.5);
    })
    it('it should return a function with ^ when passed 2^8', ()=>{
        const expression = '2^8';
        let operator = evaluate(expression);
        expect(operator(2,8)).to.be.equal(256);
    })
})

//Problem 3
const {decExec,input,dec1,input2,dec2} = require('./PS1.P3')
describe('Testing our function with strings and decorators for Problem 3', ()=>{
    //testing with our first string/decorator
    it('supercalifragilisticexpialidocious should return 4 different parts of an array',()=>{
        let output = decExec(input, dec1);
        expect(output).to.be.eql(['super','califragilisti','cexpialido','cious']);
    })
    //testing with our second string/decorator
    it('supercalifragilisticexpialidocious should return an object with 4 parts',()=>{
        let output = decExec(input2, dec2);
        expect(output.originalString).to.be.eql('supercalifragilisticexpialidocious');
        expect(output.modifiedString).to.be.eql('supercAlifrAgilisticexpiAlidocious');
        expect(output.numberReplaced).to.be.equal(3);
        expect(output.length).to.be.equal(34);
    })
})



