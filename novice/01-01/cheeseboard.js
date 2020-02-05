let size = 8;

let pagar = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      pagar += " ";
    } else {
      pagar += "#";
    }
  }
  pagar += "\n";
}

console.log(pagar);