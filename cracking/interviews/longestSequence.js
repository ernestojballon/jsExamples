function longestSequence(s1,s2){
    let sequences = []
    for(let x = 0 ; x < s1.length; x ++){
        sequences.push(getSequence(s1.slice(x,s1.length),s2))
    }
    return getLongest(sequences)

}
function getLongest(sequences){
    let longest = sequences[0]
    for(let x =1;x<sequences.length;x++){
        if(longest.length<sequences[x].length){
            longest = sequences[x]
        }
    }
    return longest.join("")
}
function getSequence(s1,s2){
    let index1=0
    let index2=0;
    let mark2=0
    let sequence = []
    while (index2<s2.length && index1<s1.length){
        if(s1[index1]!=s2[index2]){
            if(index2+1 == s2.length){
                index1++
                index2 = mark2
                continue;
            }
            index2++
            continue;
        }else{
            
            sequence.push(s2[index2])
            index1++
            index2++
            mark2 = index2
        }
    }
    return sequence
}

console.log(longestSequence("ABAZDC","BACBAD"))//ABAD
console.log(longestSequence("AGGTAB","GXTXAYB"))//GTAB
console.log(longestSequence("aaaa","aa"))//GTAB
console.log(longestSequence("ABBA","ABCABA"))//GTAB


