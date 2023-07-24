import './style.css'



const sharp = "#";

const lastLclPiramidLendth = "######".length;

let piramidStr = "";

const stringBreak = "\n";

console.log('[lastLclPiramidLendth]', lastLclPiramidLendth);

for (let i = 1 ; i < lastLclPiramidLendth +1 ; i++) {
  piramidStr += sharp.repeat(i) + stringBreak;
}

console.log(piramidStr)