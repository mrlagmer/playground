export default function findWinner(numkids, s) {
    let k = [];
    for (let i = 1; i <= numkids; i++) {
      k.push(i);
    }
    let start = 0;
    let currInd = 0;
    while (k.length > 1) {
      currInd = (currInd + s - 1) % k.length;
      k.splice(currInd, 1);
    }
    return k[0];
}
  