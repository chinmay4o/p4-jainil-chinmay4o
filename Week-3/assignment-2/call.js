function getName(a, b) {
  let name = "chinmay";

  console.log(`${this.name} lives in Mumbai and his age is ${a + b}`);
  return `${this.name} lives in Mumbai and his age is ${a + b}`;
}

let obj = {
  name: "David",
};

getName.call(obj, 10, 20); // call takes second param as list of args
