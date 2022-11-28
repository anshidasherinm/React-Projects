//Primitives :number,string,boolean
//More complex types:arrays,objects
//Functin types ,parameters

//primitives
let age: number = 22; //not Number =>Number object
let age2: number;
age2 = 18;

let userName: string;
userName = "Anshida";
let isAdult: boolean;
isAdult = true;

// let hobbies: null;
// hobbies=21; or any type of value assigned to hobbie is not possible

//More complex

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person; //default :is 'any' type

person = {
  name: "Anshida",
  age: 22,
};

let person2: {
  name: string;
  age: number;
};

// person2 = {
//   isEmployee: true,
// };//is not possible : generates error

person2 = {
  name: "sherin",
  age: 22,
};

let people: {
  name: string;
  age: number;
}[]; //array of objects

//Type inference

let course = "React - The Complete Guide";
// course = 1234;//becausse for let it decides as string, so now a diffrent type so it generates error

//for a variable to make possible to accept more than one type , we have union types

let course2: string | number = "javascript";
course2 = 12;

type Person = {
  // defining a rtype alias
  name: string;
  age: number;
};

let person3: Person;
person3 = {
  name: "Max",
  age: 32,
};

let proples: Person[];

//functios and types
function substract(a: number, b: number) {
  return a - b;
}
function substract2(a: number, b: number): number {
  return a - b;
}

//above 2 codes have the same effect ts automatically can generate return types based on the parameter types

//js has a built in print function
//this is a user defined with automatically return type as void
function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 23];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split('')//this cause error beause number cannot be splitted
const stringArray = insertAtBeginning(["a", "b"], "c");
