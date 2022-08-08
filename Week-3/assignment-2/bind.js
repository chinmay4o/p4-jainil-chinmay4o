function getName() {
  let name = "chinmay";

  console.log(`${this.name} lives in Mumbai`);
  return `${this.name} lives in Mumbai`;
}

let obj = {
    name : "David"
};

let newName = getName.bind(obj); // binding obj to getName

newName();
