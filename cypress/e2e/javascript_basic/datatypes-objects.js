/**
* variables naming rules : Same as Java
* primitives Data Dtypes
* numbers : 138 , 10.50
* string : 'apple', "apple"
* boolean :  true, false
* undefined :  varialbles does not have a value yet
* null :
 */


/**
 * There are 3 different types of variables
 * var : variable abbreviation
 * if there is, globally scope is a variable definition method
 * you can change its value later and define the same variable again
 * 
 * let : is equal to
 * let is a block-scope variable defination method
 * The value of variables defined with let can be changed later
 * but you can not define the same variable again
 * 
 * const : short for constant
 * as soon as the value of the variable is constant, like number PI
 */

let a; // undefined
console.log(typeof a);
a=6; // number
console.log(typeof a);
a='javascript'; // string
console.log(typeof a);
a=true; // boolean
console.log(typeof a);

a=6;
let b= 5, c ='Cypress';
console.log(a+b+c+a+b); // concatenation
console.log(b*c);

var name = 'Mike';
var age = 36;
var name_object= {firstName:"Jake",lastName:"Masters"}
var truth = true;
var skills = ["HTML","CSS","JS"]
var x=null;

// object
var student = {
    firstName:'Kate',
    lastName:'Masters',
    age:30,
    height :180,

    fullName: function(){
        return this.firstName+" "+ this.lastName
    }
}

const ageValue = student.age;
console.log(ageValue)

console.log(student.fullName())

let str1 = 'Cypress';
let str2 = 'Script';
let str3 = 'Java';

let result;

result="The result variable is: " + str3 + str2 + ' and ' + str1;
console.log(result);

// different from Java: backtick for variable insertion

result=`the result variable is: ${str3}${str2} ${str1}`
console.log(result)