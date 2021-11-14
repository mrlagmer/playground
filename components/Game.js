import { useState } from "react";
import confetti from "canvas-confetti";

//https://blog.mattclemente.com/2019/07/12/modulus-operator-modulo-operation/
function findWinner(numkids, s) {
  let k = [];
  for (let i = 1; i <= numkids; i++) {
    k.push(i);
  }
  let start = 0;
  let currInd = 0;
  while (k.length > 1) {
    //  if (pos === 0 && start !== 0) {
    //     kids.splice(pos, 1)
    //   }
    //   kids.splice(pos + k -1, 1)
    //   pos = pos + k - 1
    //   if (pos >= kids.length) {
    //       pos = pos - kids.length
    //   }
    //  start++
    currInd = (currInd + s - 1) % k.length;
    k.splice(currInd, 1);
    console.log(k);
  }
  return k[0];
}

export default function Game() {
  const [kids, setKids] = useState(0);
  const [skip, setSkip] = useState(0);
  const [winner, setWinner] = useState(false);

  const handleClick = () => {
    console.log(skip);
    console.log(kids);
    console.log(findWinner(Number(kids), Number(skip)));
    setWinner(findWinner(Number(kids), Number(skip)));
    confetti.create(document.getElementById("canvas"), {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 200 });
  };
  if (!winner) {
    return (
      <div className="mt-8">
        <input
          id="numkids"
          placeholder="Number of kids"
          onChange={(e) => {
            setKids(e.currentTarget.value);
          }}
          className="mb-4 border-0 px-3 py-3 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        />
        <input
          id="skip"
          placeholder="Skipped"
          onChange={(e) => {
            setSkip(e.currentTarget.value);
          }}
          className="mb-4 border-0 px-3 py-3 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        />
        <button
          className="font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-400 active:bg-pink-800 uppercase text-sm shadow hover:bg-pink-800 ease-linear transition-all duration-80"
          onClick={handleClick}
        >
          Find Winner
        </button>
      </div>
    );
  }
  return (
    <h1 className="font-extrabold text-6xl mt-8">Winner seated at {winner}</h1>
  );
}
