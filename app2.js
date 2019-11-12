let tempCard, tempCardB, tempOrder;
const cards = document.querySelectorAll('.card-box');
let tempCardNo = 1;
let ranSet = [];
let lockBroad = false;
let finalScore = 0;
let instruction = document.getElementById('instruction');
let stepCount = 0;
let steps = document.getElementById('step');
let reset = document.getElementById('reset');

function shuffleCard() {
    cards.forEach(card => {
        ranSetCard();
        card.style.order = tempOrder;
        console.log(card.style.order);
    });
}

function ranSetCard() {
    let ranCard = Math.floor(Math.random() * 18);
    if (ranSet.includes(ranCard)) {
        ranSetCard();
    } else {
        ranSet.push(ranCard);
        tempOrder = ranCard;
    }
}
var flipCard = function () {
    if (lockBroad) return;
    this.classList.add('open');
    if (!(tempCardNo === 2)) {
        tempCardNo++;
        tempcardA = this;
    } else {
        if (this === tempcardA) { return; }
        tempCardNo--;
        tempCardB = this;
        checkMatch();
    }
};
function checkMatch() {
    let matchCondition = tempcardA.dataset.name === tempCardB.dataset.name;
    matchCondition ? cardMatch() : cardNotMatch();
    countTheSteps();
};
function countTheSteps() {
    stepCount++;
    steps.innerHTML = "Step : " + stepCount;
}
function cardMatch() {
    tempcardA.removeEventListener('click', flipCard) & tempCardB.removeEventListener('click', flipCard);
    finalScore++;
    if (finalScore === 9) instruction.innerHTML = "You Win !!!";
}
function cardNotMatch() {
    lockBroad = true;
    setTimeout(() => {
        tempcardA.classList.remove('open') & tempCardB.classList.remove('open');
        lockBroad = false;
    }, 700);
}
let resetCards = function () {
    cards.forEach(card => card.classList.remove('open'));
    cards.forEach(card => card.addEventListener('click', flipCard));
    [tepcardA, tempcardB, tempCardNo, finalScore, stepCount, ranSet, lockBroad]=[null, null, 1, 0, 0, [], false];
    shuffleCard();
    steps.innerHTML = "Step : " + stepCount;
    instruction.innerHTML = "Lets try finsh it within 14 steps!";
}

shuffleCard();
reset.addEventListener('click', resetCards);

cards.forEach(card => card.addEventListener('click', flipCard));

