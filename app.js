let moonClickCount = 200
let pickAxeCost = 5
let tractorCost = 10
let alienCost = 15
let ufoCost = 20
let pickAxePurchased = 0
let tractorPurchased = 0
let alienPurchased = 0
let ufoPurchased = 0
let pickAxeMineMultiplier = 2
let tractorMineMultiplier = 3
let alienMineMultiplier = 4
let ufoMineMultiplier = 5
let pickaxeDiamondTotal = 0
let tractorDiamondTotal = 0
let alienDiamondTotal = 0
let ufoDiamondTotal = 0
let totalDiamondsPerClick = (pickaxeDiamondTotal + tractorDiamondTotal + alienDiamondTotal + ufoDiamondTotal)


function mine() {
  // moonClickCount++
  // let moonClickCountElem = document.getElementById("total-diamonds-mined")
  // moonClickCountElem.innerText = moonClickCount.toString()
  // if (pickaxeDiamondTotal == 0) {
  //   moonClickCount++
  //   let moonClickCountElem = document.getElementById("total-diamonds-mined")
  //   moonClickCountElem.innerText = moonClickCount.toString()
  // } else {
  //   let moonClickCountElem = document.getElementById("total-diamonds-mined")
  //   moonClickCountElem.innerText = (moonClickCount + pickaxeDiamondTotal + tractorDiamondTotal + alienDiamondTotal + ufoDiamondTotal)
  // }
  if (pickaxeDiamondTotal > 1 || tractorDiamondTotal > 1) {
    moonClickCount = moonClickCount + pickaxeDiamondTotal + tractorDiamondTotal + alienDiamondTotal + ufoDiamondTotal
    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()
  } else {
    moonClickCount++
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()
  }

  // if (tractorPurchased < 1) {
  //   moonClickCount++
  //   let moonClickCountElem = document.getElementById("total-diamonds-mined")
  //   moonClickCountElem.innerText = moonClickCount.toString()
  // } else {
  //   moonClickCount += tractorDiamondTotal
  //   let moonClickCountElem = document.getElementById("total-diamonds-mined")
  //   moonClickCountElem.innerText = moonClickCount.toString()
  // }
  
  
  // if (pickaxeDiamondTotal > 0) {
  //   moonClickCount += pickaxeDiamondTotal
  // }

  console.log(moonClickCount);
}

function buyPickAxe() {
  if (moonClickCount >= pickAxeCost) {
    pickAxePurchased++
    moonClickCount -= pickAxeCost;
    pickaxeDiamondTotal = pickAxePurchased * pickAxeMineMultiplier
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()

  let pickAxePurchasedElem = document.getElementById("total-pickaxe-purchased")
  pickAxePurchasedElem.innerText = pickAxePurchased.toString()

  let pickaxeDiamondTotalElem = document.getElementById("pickaxe-total-stat")
  pickaxeDiamondTotalElem.innerText = pickaxeDiamondTotal.toString()


  // moonClickCount.toString()
  // console.log(moonClickCount);
}
}

function buyTractor() {
  if (moonClickCount >= tractorCost) {
    tractorPurchased++
    moonClickCount -= tractorCost;
    tractorDiamondTotal = tractorPurchased * tractorMineMultiplier
    tractorCost++
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()

  let tractorPurchasedElem = document.getElementById("total-tractor-purchased")
  tractorPurchasedElem.innerText = tractorPurchased.toString()

  let tractorDiamondTotalElem = document.getElementById("tractor-total-stat")
  tractorDiamondTotalElem.innerText = tractorDiamondTotal.toString()

  let tractorCostElem = document.getElementById("pickaxe-cost")
  tractorCostElem.innerText = tractorCost.toString()

  // moonClickCount.toString()
  // console.log(moonClickCount);
}
}

function buyAlien() {
  if (moonClickCount >= alienCost) {
    alienPurchased++
    moonClickCount -= alienCost;
    alienDiamondTotal = alienPurchased * alienMineMultiplier
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()

  let alienPurchasedElem = document.getElementById("total-alien-purchased")
  alienPurchasedElem.innerText = alienPurchased.toString()

  let alienDiamondTotalElem = document.getElementById("alien-total-stat")
  alienDiamondTotalElem.innerText = alienDiamondTotal.toString()

  

  // moonClickCount.toString()
  // console.log(moonClickCount);
}
setInterval(mine, 3000)
setInterval(() => {
  
}, interval);
}


function buyUFO() {
  if (moonClickCount >= ufoCost) {
    ufoPurchased++
    moonClickCount -= ufoCost;
    ufoDiamondTotal = ufoPurchased * ufoMineMultiplier
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()

  let ufoPurchasedElem = document.getElementById("total-ufo-purchased")
  ufoPurchasedElem.innerText = ufoPurchased.toString()

  let ufoDiamondTotalElem = document.getElementById("ufo-total-stat")
  ufoDiamondTotalElem.innerText = ufoDiamondTotal.toString()


  // moonClickCount.toString()
  // console.log(moonClickCount);
}
setInterval(mine, 3000)
}

// function pickaxeClickStatTotal() {
//   pickaxeDiamondTotal = pickAxePurchased * pickAxeMineMultiplier
  
// }
