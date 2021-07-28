/*

longest comom strings 

"ABAZDC" , "BACBAD" -> "ABAD", "BAC", "A", "Z", "D", "C"
"AGGTAB" , "GXTXAYB" -> "GTAB"
"aaaa" , "aa" -> "aa"
*/
const longestComon = (word1, word2) => {
  const results = [];
  for (let x = 0; x < word1.length; x++) {
    results.push(comon(word1.slice(x, word1.length), word2));
  }
  return getLongest(results);
};
const getLongest = (array) => {
  return array.reduce((longest, elem) => {
    if (elem.length > longest.length) return elem;
    return longest;
  }, '');
};
const comon = (word1, word2) => {
  const result = [];
  const arr1 = word1.split('');
  let arr2 = word2.split('');
  let pointer1 = 0;
  while (pointer1 < arr1.length && arr2.length > 0) {
    const found = arr2.indexOf(arr1[pointer1]);
    if (found >= 0) {
      result.push(arr2[found]);
      if (found == 0) {
        arr2.shift();
      } else {
        arr2 = arr2.slice(found, arr2.length);
      }
    }
    pointer1++;
  }
  return result.join('');
};
console.log(longestComon('ABAZDC', 'BACBAD'));
console.log(longestComon('AGGTAB', 'GXTXAYB'));
console.log(longestComon('dTAB', 'ATABdTAB'));
console.log(longestComon('aaaa', 'aa'));
