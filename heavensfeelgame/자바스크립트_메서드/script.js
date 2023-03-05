export { countNumber };
console.log("hello, world!");
const array2 = ["1", "2", "3", "4"];

function countNumber() {
  array2.forEach(function name(params, index, array2) {
    console.log(`params:${params} index:${index} array:${array2}`);
  });
}
