var diceArray = [];

document.addEventListener("DOMContentLoaded", function(event) {
    var diceContainer = document.getElementById("diceContainer")
    generate.addEventListener("click", function(){
        diceArray.push(new Die())
        console.log(diceArray);
    });
    
});

function Die() {
    this.div = document.createElement("span");
    this.value = randNumb()
    this.div.className = "dice dice-" + this.value;
    this.div.title = "Dice " + this.value;
    this.div.addEventListener('click', this.change.bind(this));
    this.div.addEventListener("dblclick", this.remove.bind(this));
    diceContainer.appendChild(this.div);
};

Die.prototype.change = function() {
    this.value = randNumb()
    this.div.className = "dice dice-" + this.value;
    this.div.title = "Dice " + this.value;
};

Die.prototype.remove = function() {
    var current = diceArray.indexOf(this);
    diceArray.splice(current, 1);
};

function randNumb() {
min = Math.ceil(7);
max = Math.floor(1);
return Math.floor(Math.random() * (max - min)) + min;
};

var rollDice = document.getElementById("rolldice")
rollDice.addEventListener("click", function(){
    for (var n = 0; n < diceArray.length; n++) {
        var diceNum = diceArray[n];
        diceNum.value = randNumb()
        diceNum.div.className = "dice dice-" + diceNum.value;
        diceNum.div.title = "Dice " + diceNum.value;
    }
});

var diceSum = document.getElementById("sum")
diceSum.addEventListener("click", function(){
    var total = diceArray.reduce(function(acc, curr) {
        return acc + curr.value;
      }, 0);
    alert(`Total of all dice on screen: ${total}`);
});