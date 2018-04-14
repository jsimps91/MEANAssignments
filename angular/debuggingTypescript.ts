var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// convert 9 to string

myString = String(9)

function sayHello(name: string){
   return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));
//expected parameter is a string
console.log(sayHello(String(9)));

function fullName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        var fullName = `${firstName} ${middleName} ${lastName}`;
    }
    else {
        var fullName = `${firstName} ${lastName}`;
    }
   
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
//Jay's property name was belt, not belts
console.log(graduate(jay));


class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const turing = new Ninja("Alan", "Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x =>  x * x ;

// Removed the curly braces from x * x
console.log(square(4));
// // This is not working:
var multiply = (x, y) => x * y;
console.log(multiply(2, 3))
// // Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference]
};

console.log(math(2, 5))


class Elephant {
constructor(public age: number) { }
   birthday = () => function(){
      this.age++;
   }
}
var babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)