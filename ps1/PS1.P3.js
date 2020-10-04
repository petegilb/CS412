//ps1 problem 3

//function with two parameters: string and decorator function
// execute the passed decorator function on the string and return the result
const decExec = (str, decorator) => {
    return decorator(str);
}

//two expressions that call this function
//one:
let input = 'supercalifragilisticexpialidocious';
//replace all c's in the string with $c so when we split it doesn't remove it
input = input.replace(/c/g, '$c')
const dec1 = (str) => str.split('$');

//simple test for one
console.log(decExec(input,dec1));

//two:
let input2 = 'supercalifragilisticexpialidocious';
const dec2 = (str) => {
    const capA = str.replace(/a/g, 'A');
    let toReturn = {
        originalString: str,
        modifiedString: capA,
        numberReplaced: str.split('a').length-1,
        length: capA.length,
    }
    return toReturn;
}

console.table(decExec(input2, dec2));

module.exports = {decExec,input,dec1,input2,dec2};