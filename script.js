/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//https://blog.mattclemente.com/2019/07/12/modulus-operator-modulo-operation/
 var findTheWinner = function(n, k) {
     let kids = []
     for (let i=1; i <= n; i++) {
        kids.push(i);
     }
     let start = 0
     let currInd = 0;
     while (kids.length > 1) {
        //  if (pos === 0 && start !== 0) {
        //     kids.splice(pos, 1)
        //   }
        //   kids.splice(pos + k -1, 1)
        //   pos = pos + k - 1
        //   if (pos >= kids.length) {
        //       pos = pos - kids.length
        //   }
        //  start++
        //  console.log(kids) 
         currInd = (currInd + k - 1) % kids.length;
         kids.splice(currInd, 1);
         console.log(currInd)
      }
    
};

findTheWinner(5, 2)
