//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// This function takes a string as an argument and returns a hashtag from it, if possible.
function generateHashtag(str) {

  // Split the string into an array of words, and capitalize the first letter of each word.
  const array = str.split(' ').map((v) => {
    v.trim(); // Remove any leading or trailing whitespace.
    return v.slice(0, 1).toUpperCase() + v.slice(1);
  });

  // Check if the length of the joined array (with no spaces) is between 1 and 140 characters.
  if (array.join('').length < 140 && array.join('').length > 0) {
    // If it is, add a '#' character to the beginning of the array, and return the joined array as a string.
    array.unshift('#');
    return array.join('');
  }
  // If the length is not within the acceptable range, return false.
  return false;
}

console.log(generateHashtag(''));
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log(generateHashtag('a'.repeat(140)));
console.log(generateHashtag('Code Is Nice'));
