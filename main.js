var bag = 1.00;
var cash = 0.00;
var power = 1;
var capacity = 1;
console.log("js works");
function money() {
  console.log(bag);
  console.log(cash);
  if (bag > 0) {
    if (power / 100 > bag) {
      cash += bag;
      bag = 0;
    } else {
      cash += (0.01 * power);
      bag -= (0.01 * power);
    }
    if (bag < 0.01 && capacity === 1) {
      cash += (0.01 * power);
      bag = 0;
      document.getElementById("bag").innerHTML = "0";
    } else {
      document.getElementById("bag").innerHTML = bag.toFixed(2);
    }
    document.getElementById("money").innerHTML = cash.toFixed(2);
  }
}
function fillBag() {
  bag = capacity;
  document.getElementById("bag").innerHTML = bag.toFixed(2);
}
function power2x() {
  power *= 2;
  document.getElementById("power").innerHTML = power;
}
function bag2x() {
  bag += capacity;
  capacity *= 2;
  document.getElementById("capacity").innerHTML = capacity;
  document.getElementById("bag").innerHTML = bag.toFixed(2);
}
