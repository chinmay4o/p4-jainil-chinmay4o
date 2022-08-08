var nums = [2, 7, 11, 15];
var nums2 = [3, 2, 4, 2];
var target = 13;
var target2 = 6;
var sol = [];

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        // console.log(nums[i], nums[j]);
        sol.push(i);
        sol.push(j);
        console.log(i, j);
// break;
console.log(sol);
return sol;
      }
    }
  }
//   console.log(sol);
//   return sol;
};

console.time();
twoSum(nums2, target2);
console.timeEnd();
