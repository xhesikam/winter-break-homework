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