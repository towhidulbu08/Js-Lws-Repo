/**
 * Primitive Value:
 * Stack Data Structure
 *
 *
 */

const title = "javascript"; //  allocate the value in a slot  of a memory
const name = title; // here  copy the value of title("javascript") first and then allocate in another slot of memory

// summery : the value of both title and name variable are same but there position in terms of memory are different , so title and name point two different position of memory instead of having same value

/**
 * Reference Values:
 * heap data structure: a random place in a memory
 *
 */

let person = { name: "sakib", age: 35 }; // here value allocate random place in a memory. but here the variable does not point the value  directly rather it points directly to a pointer in the stack ,and this pointer (personPointer) points the value directly

const player = person; // here creates a new pointer (playerPointer) in stack of a memory and this new Pointer point the value(object)

person.name = "tamim"; // as the two different pointer points the same value so it will change(mutate) both of the variable

// Assignment Vs Mutation

person = {}; // its an assignment , not mutation , it will create a new pointer for the value in the memory,where in mutation the  pointer will be same but the value will be update

const language = {
  name: "Js",
  year: 1999,
  libraries: ["React", "Angular", "Vue"],
};

const language2 = _.cloneDeep(language);
language.libraries.push("Jquery");
// console.log(language);
// console.log(language2);

/**
 *  copy nested references immutably
 *  primitive wrapper type(new String, new Number)
 *  pass by references/value
 */

const a = 1;

let change = (val) => {
  val = ++val; // assignment
  // Note: function parameter automatically treated as local variable within function scope .You do not need to use let, const, or var for parameters.

  console.log(a, val);
};
change(a); // here a pass by reference

console.log(a);
