function isPattern(s,p){
    let queueReg = p.split("")
    let word = s.split("")
    let index1 = index2 = 0 
    while(index1 < queueReg.length || index2 < word.length){
        if(queueReg[index1]=="*"){
            if(queueReg[index1-1]==".") return true
            if(word[index2] == queueReg[index1-1]){
                index2++
            }else{
                index1++
            }
        }else if(queueReg[index1]=="."){
            index1++
            index2++
        }else if (word[index2] != queueReg[index1]){
            if(queueReg[index1+1]=="*" && queueReg[index1+2]==word[index2]){
                index1+=2
            }else
            if(queueReg[index1+1]=="*" && word[word.length-1] == queueReg[index1]){
                return true
            }else{
                return false
            }
        }else{
            index1++
            index2++
        }
    }
    return true
}
console.log(isPattern("abcdddddffffggggh","abcd*f*g*"))//true
///console.log(isPattern("aab","c*a*b"))//true
// console.log(isPattern("aba","ab"))//false
// console.log(isPattern("aba","aba"))//true
// console.log(isPattern("ab","aba"))//false
// console.log(isPattern("aba","ab."))//true
// console.log(isPattern("aba","a.."))//true
// console.log(isPattern("aa","aaa*"))//true
// console.log(isPattern("ab",".*"))//true
// console.log(isPattern("ab","."))//false
// console.log(isPattern("aaa","a*."))//true