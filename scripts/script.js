const tickRate = 1000 / 30;
let dirt = new Building(1000, 0);
let child = new Building(dirt.autoClickerPrice * 2, 1 / 200);
let score = 0;

function scorePlusPlus() {
    score++;
}

function buttonState() {
    if (dirt.autoClickerPrice > score && dirt.autoOwned <= 5) {
        document.getElementById('buySingledirt').disabled = true;
    } else {
        document.getElementById('buySingledirt').disabled = false;
    }

    if (child.autoClickerPrice > score && child.autoOwned <= 5) {
        document.getElementById('acquireChild').disabled = true;
    } else {
        document.getElementById('acquireChild').disabled = false;
    }
}

function updateAutoScore() {
    score += (dirt.cpf + child.cpf) * (dirt.autoOwned + child.autoOwned);
    updatePage();
    buttonState();
}

function updateButton() {
    document.getElementById(
        'buySingledirt'
    ).innerHTML = `<img src="images/dirtbag.jpg" />Buy Better Dirt for  ${dirt.autoClickerPrice}`;
    document.getElementById(
        'acquireChild'
    ).innerHTML = `<img src = 'images/boohoo baby.png' />Buy Baby for ${child.autoClickerPrice}`;
}

function updatePage() {
    document.getElementById('score').innerHTML = Math.floor(score);
}

setInterval(updateAutoScore, tickRate);
