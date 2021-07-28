const word1 = 'aaabbbcccdd'; // a3b3c3dd
const word2 = 'aaaabbcccc'; //a4bbc4

const compress = (word) => {
  const compressed = [];
  const splitWord = word.split('');
  let previous = '';
  let counter = 0;
  for (let x = 0; x < splitWord.length; x += 1) {
    const element = splitWord[x];
    if (element === previous) {
      counter += 1;
      if (x === splitWord.length - 1) {
        if (counter === 2) {
          compressed.push(element);
        } else {
          compressed.push(counter);
        }
      }
    } else {
      if (counter === 2) {
        compressed.push(previous);
      } else {
        if (counter > 1) compressed.push(counter);
      }
      compressed.push(element);
      counter = 1;
      previous = element;
    }
  }
  return compressed.join('');
};

console.log(compress(word1));
console.log(compress(word2));
