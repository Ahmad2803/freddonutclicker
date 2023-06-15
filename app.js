//DOM
const clickHeading = document.querySelector("#click-heading");
const clickBtn = document.querySelector("#donut");
const autoBtn = document.querySelector("#auto-clicker");
// const reset = document.querySelector("#reset");
const autoHeading = document.querySelector("#auto-heading");
const autoPricing = document.querySelector("#auto-pricing");
const clickLogo = document.getElementById("#logo")

const infoCard = document.querySelector(".info");
  






//Game Variables
let donutCount = 0;
let autoClickerCost = 100
let clicksPerSecond = 0;
let autoClickerCount = 0;
let priceIncrease = .10;





//Event Listener
clickBtn.addEventListener("click", () => {
    donutCount += 1;
    clickHeading.innerHTML = `Clicks: ${donutCount}`;

});

autoBtn.addEventListener("click", () => {
    if(donutCount >= autoClickerCost ) {
        donutCount = donutCount - autoClickerCost;
         autoClickerCost =  (priceIncrease * autoClickerCost) + autoClickerCost
        autoClickerCount += 1;
        clicksPerSecond = clicksPerSecond + 1;
   
    autoHeading.innerHTML = `AutoClickers: ${autoClickerCount}`;
    autoPricing.innerHTML = `AutoClicker Price: $${autoClickerCost}`;
    }//else?
})

//Functions
function autoClicker() {
    donutCount += clicksPerSecond
}

function showHide() {
  infoCard.classList.toggle("hide")
}

function resetGame() {
  if(confirm("Are you sure you want to reset game?")){
    history.go(0);
  }
  
}




//Game Loop
window.setInterval(() =>{
    autoClicker();
    clickHeading.innerHTML = `Clicks: ${donutCount}`;

}, 800)


