function add(a = 0, b = 0) {
  return a + b;
}

function memoize(fn) {
  let cache = new Map();
  //   console.log("fn", fn);
  function m(...args) {
    let key = args.toString();
    if (cache.has(key)) {
      //   console.log(cache.get(key));
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    // console.log(cache.get(key));
    return cache.get(key);
  }

  return m;
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
// console.log("memoizeAdd", memoizeAdd);

//then calling...
memoizeAdd(100, 100); //returns 200
memoizeAdd(100); //returns 100
memoizeAdd(100); //returns 100
memoizeAdd(100, 200); //returns 300
memoizeAdd(100, 200); //returns 300
memoizeAdd(100, 100); //returns 200

// Time function to log time;
// function time(fn) {
//   console.time();
//   fn();
//   console.timeEnd();
// }
