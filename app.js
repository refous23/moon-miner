let moonClickCount = 0
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
let noUpgradeClick = 1
let totalDiamondsPerClick = 0
let totalAutoDiamonds = 0

function mine() {
  if (pickaxeDiamondTotal > 1 || tractorDiamondTotal > 1) {
    moonClickCount = moonClickCount + pickaxeDiamondTotal + tractorDiamondTotal + noUpgradeClick
    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()

    totalDiamondsPerClick = pickaxeDiamondTotal + tractorDiamondTotal + noUpgradeClick
    let totalDiamondsPerClickElem = document.getElementById("diamonds-per-click")
    totalDiamondsPerClickElem.innerText = totalDiamondsPerClick.toString()
  } else {
    moonClickCount++
    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()
  }
}


function buyPickAxe() {
  if (moonClickCount >= pickAxeCost) {
    pickAxePurchased++
    moonClickCount -= pickAxeCost;
    pickAxeCost++
    pickaxeDiamondTotal = pickAxePurchased * pickAxeMineMultiplier
    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()

    let pickAxePurchasedElem = document.getElementById("total-pickaxe-purchased")
    pickAxePurchasedElem.innerText = pickAxePurchased.toString()

    let pickaxeDiamondTotalElem = document.getElementById("pickaxe-total-stat")
    pickaxeDiamondTotalElem.innerText = pickaxeDiamondTotal.toString()

    let pickAxeCostElem = document.getElementById("pickaxe-cost")
    pickAxeCostElem.innerText = pickAxeCost.toString()
  }
}


function buyTractor() {
  if (moonClickCount >= tractorCost) {
    tractorPurchased++
    moonClickCount -= tractorCost;
    tractorCost++
    tractorDiamondTotal = (tractorPurchased * tractorMineMultiplier) + noUpgradeClick

    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()

    let tractorPurchasedElem = document.getElementById("total-tractor-purchased")
    tractorPurchasedElem.innerText = tractorPurchased.toString()

    let tractorDiamondTotalElem = document.getElementById("tractor-total-stat")
    tractorDiamondTotalElem.innerText = tractorDiamondTotal.toString()

    let tractorCostElem = document.getElementById("tractor-cost")
    tractorCostElem.innerText = tractorCost.toString()
  }
}

function buyAlien() {
  if (moonClickCount >= alienCost) {
    alienPurchased++
    moonClickCount -= alienCost;
    alienCost++
    alienDiamondTotal = alienPurchased * alienMineMultiplier

    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()

    let alienPurchasedElem = document.getElementById("total-alien-purchased")
    alienPurchasedElem.innerText = alienPurchased.toString()

    let alienDiamondTotalElem = document.getElementById("alien-total-stat")
    alienDiamondTotalElem.innerText = alienDiamondTotal.toString()

    let alienCostElem = document.getElementById("alien-cost")
    alienCostElem.innerText = alienCost.toString()
  }
}


function buyUFO() {
  if (moonClickCount >= ufoCost) {
    ufoPurchased++
    moonClickCount -= ufoCost;
    ufoDiamondTotal = ufoPurchased * ufoMineMultiplier
    ufoCost++

    let moonClickCountElem = document.getElementById("total-diamonds-mined")
    moonClickCountElem.innerText = moonClickCount.toString()

    let ufoPurchasedElem = document.getElementById("total-ufo-purchased")
    ufoPurchasedElem.innerText = ufoPurchased.toString()

    let ufoDiamondTotalElem = document.getElementById("ufo-total-stat")
    ufoDiamondTotalElem.innerText = ufoDiamondTotal.toString()

    let ufoCostElem = document.getElementById("ufo-cost")
    ufoCostElem.innerText = ufoCost.toString()
  }
}
setInterval(autoMine, 5000)

function autoMine() {
  moonClickCount = moonClickCount + alienDiamondTotal + ufoDiamondTotal
  totalAutoDiamonds = alienDiamondTotal + ufoDiamondTotal
  let moonClickCountElem = document.getElementById("total-diamonds-mined")
  moonClickCountElem.innerText = moonClickCount.toString()

  let totalAutoDiamondsElem = document.getElementById("auto-diamonds")
  totalAutoDiamondsElem.innerText = totalAutoDiamonds.toString()
}