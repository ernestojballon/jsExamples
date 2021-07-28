// Implement and algorithm to determine if a string has al unique characters.
// What if you can't use additional data structure?
/*

home    h     o     m   e   
casa    c   a2   s

*/

function hasAllUnique(word) {
  console.log(word, new Set(word));
  return word.length === new Set(word).size;

  //   const uniques = new Set();
  //   for (let i = 0; i < word.length; i++) {
  //     if (uniques.has(word[i])) return false;
  //     uniques.add(word[i]);
  //   }
  //   return true;

  //   let arr = [...s];
  //   let notUnique = true;
  //   arr = arr.sort((letter, nextLetter) => {
  //     if (letter === nextLetter) notUnique = false;
  //     return letter.charCodeAt(0) - nextLetter.charCodeAt(0);
  //   });
  //   return notUnique;
}
console.log(hasAllUnique('asdfgt'));
