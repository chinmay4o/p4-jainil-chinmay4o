function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `Count is${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// In the above example the function is being called at line number 16 where,
// "count is 0" line is already created. Now after increamenting the count there
// is no such function which updates the message and count inside thats why the count is printed tobe 0
