function kamateli() {
  const random = Math.floor(Math.random() * 6 + 1);
  const pasuxi = document.getElementById("pasuxi");
  pasuxi.textContent = random;
}

function kamateli2() {
  const random = Math.floor(Math.random() * 6 + 1);
  const pasuxi = document.getElementById("pasuxi2");
  pasuxi.textContent = random;
}

const answer = Math.floor(Math.random() * 101);
console.log(answer);

function gamoicani() {
  let gamocnoba = document.getElementById("gamocnoba").value;
  gamocnoba = Number(gamocnoba);
  if (gamocnoba === answer) {
    console.log("sworia");
  } else if (gamocnoba < answer) {
    console.log("cade ufro magali ricxvi");
  } else {
    console.log("cade ufro dabali ricxvi");
  }
}
