//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// This function takes an array of intervals as an argument and returns the sum of the lengths of all non-overlapping intervals.
function sumIntervals(intervals) {

  // Sort the intervals in ascending order based on their starting points.
  let sorted = intervals.sort((a, b) => a[0] - b[0]);

  // Initialize an array to store the merged intervals.
  let merged = [sorted[0]];

  // Iterate through the sorted intervals, merging any overlapping intervals into a single interval.
  for (let i = 1; i < sorted.length; i++) {

    // Get the last interval in the merged array.
    let last = merged[merged.length - 1];

    // If the current interval overlaps with the last merged interval, update the last interval's end point.
    if (sorted[i][0] <= last[1]) {
      last[1] = Math.max(last[1], sorted[i][1]);
    } else {
      // Otherwise, add the current interval to the merged array.
      merged.push(sorted[i]);
    }
  }

  // Reduce the merged intervals array to a single value by adding up the length of each interval.
  return merged.reduce((acc, cur) => acc + cur[1] - cur[0], 0);
}

const test1 = [
  [1, 2],
  [6, 10],
  [8, 15]
];

const test2 = [
  [1, 4],
  [7, 10],
  [3, 5]
];

const test3 = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
];

console.log(sumIntervals(test1));
console.log(sumIntervals(test2));
console.log(sumIntervals(test3));