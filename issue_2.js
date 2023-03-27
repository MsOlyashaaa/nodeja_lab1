// This function takes a string as an argument and returns a new string where each word is converted to pig latin.
function pigIt(str) {

  // Use a regular expression to match all word characters (\w+), and replace each match with the pig latin equivalent.
  return str.replace(/\w+/g, (w) => {
    // Return the word with its first letter moved to the end, followed by 'ay'.
    return w.slice(1) + w[0] + 'ay';
  });
}

console.log(pigIt('Pig latin is cool!'));
console.log(pigIt('This is, my string'));