// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
// 1.)
// I made a variable to hold the sum and then looped through the numbers until the goal number 
//and then if they were a multiple of 3 or 5 added them to the sum and then returned the sum
function solution(number){
  let sum = 0;
  
 for(let i = 0; i < number; i++){ 
   if(i % 3 === 0  || i % 5 === 0){ 
     sum += i;
   }
 }
   return sum;
                                  
}

//2.)
//I did a series of if else statements to print out the array on the way it needed to be
function likes(names) {
   if (names.length === 0){
     return `no one likes this`;
   } else if (names.length === 1){
     return `${names[0]} likes this`;
   } else if (names.length === 2){
     return `${names[0]} and ${names[1]} like this`;
   } else if (names.length === 3){
     return `${names[0]}, ${names[1]} and ${names[2]} like this`
   } else{
     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
   }
}

//3
// created a shallow copy with the repeated values and then filtered it to compare to the other values since that would be the different one
function findUniq(arr) {
 let repeat = arr.filter((item, index) => arr.indexOf(item) !== index)
  return arr.filter((item)=> item !== repeat[0])[0]
}

//4
//created two versions of the array one with even numbers and one with odd and then compared their lengths 
//whichever was shorter had the outlier so i printed that number out
function findOutlier(integers){
  let even = integers.filter(num => num % 2 === 0);
  let odd = integers.filter(num => num % 2 !== 0)
  return even.length > odd.length ? odd[0] : even[0]
}