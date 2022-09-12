/*--------------------------->Systex----------------------
    array_name.splice(start, deletecount, replacevalues)
//--------------------------------------------------------*/

//---->Example-01 [Removeing All element]
let A = ['A','B','C','D','E']
A.splice(2);
console.log(A)


//---->Example-02 [Count Wise Element Delete]
let B = ['A','B','C','D','E']
B.splice(2,2);
console.log(B)


//---->Example-03 [Insert New Element]
let C = ['A','B','C','D','E']
C.splice(5,0,'F');
console.log(C)


//---->Example-04 [Insert New Element & Delete old data]
let D = ['A','B','C','D','E']
D.splice(2,3,'X','Y','Z');
console.log(D)