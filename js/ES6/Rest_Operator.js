function myFunc(...params) {
  let c = params; //  rest operator in function parameter is just a normal array and all array methods you can apply on it
  // but argument in function is a different type of object though it looks like an array but its not. array methods can not be apply on arguments
  //c.push("Tamim");

  console.log(params);
}

myFunc(5, 6, 100, 200);
