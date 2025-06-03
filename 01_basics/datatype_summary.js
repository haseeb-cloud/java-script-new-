//# primitive

// 7 types: string , number, boolean , null ( ka matlab empty) , undefined , Symbol, 
// bigInt

 const score = 100
 const scoreValue = 110.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 


 //symbol define karna hai 
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id == anotherId)


 const bigNumber = 23237734412341n // production level mai abhi tak to nahi kiya kiisi nai 



// refernce data type ( non primitive) , 

// Array , objects, functions



const hereos = [ "shaktiman", "nagraaj", "doga"] ;
          let myObj = {
          name : "hitest",
          age : 22,
          }

const myFunction = function() {
          console.log("hellow world");
}

console.log(typeof myFunction);

/*
type of valu => result
undefined => undefined
null => object 
boolean => boolean 
number => number
string => string 
object => function 
object => object

 jaa kar ecma mai jaa kar prho datatype kai baare mai 


*/