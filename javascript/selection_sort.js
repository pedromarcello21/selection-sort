function selectionSort(arr) {
  // type your code here
  sorted_arr = [];
  while(arr.length != 0){
    //get min
    min = Math.min.apply(Math, arr)
    //extract min
    let index = arr.indexOf(min)
    //remove min from list, gives me back an array so index the first value so you don't get an array or rays
    let x = arr.splice(index, 1)[0]
    //push this value to a new array
    sorted_arr.push(x)
  }
  return sorted_arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
