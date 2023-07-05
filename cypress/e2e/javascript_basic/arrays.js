// creating array
var scores = new Array() // empty array
var numbers= new Array(10) // array with initial size 10
var myNumber = new Array(9,6,11,2) // array with initial elements

var athletes = Array(3); // array with initial size 3
var sings = Array("Red"); // array with one element

var emptyArray = [];
var colors=['red','green','blue']

// array examples

let tools = ["Jest","Selenium","cypress","testCafe","phontomJs","Protractor"]

// accessing array elements

console.log(tools)
console.log(tools.toString())
console.log(tools[2])

const str = tools.toString();
console.log(str)

const join = tools.join(" * ") // add " * " between elements
console.log(join)

const pop = tools.pop() // removes an element from the end of an array
console.log(pop)
console.log(tools)

const push = tools.push("SlimerJs") // add element to end of the array
console.log(push)

const shift = tools.shift() 
console.log(shift)
console.log(tools)

const unshift = tools.unshift("Selenoid") // add element to beginning of an array
console.log(unshift)
console.log(tools)

// sort elements
const sort = tools.sort() 
console.log(tools)

// reverse elements
const reverse = tools.reverse() 
console.log(tools)

tools.forEach((value)=>{// foreach loop
    if (value=='cypress'){
        console.log("cypress is trending now")
    }else{
        console.log("element not found")
    }

})