var p1 = "Sakib";
var p2 = "Tamim";
var p3 = "Rahim";

function modifier(str, ...values) {
  const m = str.reduce((acc, cur) => {
    return acc + cur + (values.length ? "Mr." + values.shift() : "");
  }, "");

  return m;
}

console.log(modifier`We have ${p1}  ${p2} and ${p3} in our cricket team`);
