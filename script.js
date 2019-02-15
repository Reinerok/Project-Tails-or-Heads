let tails = document.getElementById('tails'),
    heads = document.getElementById('heads'),
    button = document.getElementById('button'),
    text = document.getElementById('text'),
    roll = document.getElementById('roll'),
    textTails = document.getElementById('textTails'),
    textHead = document.getElementById('textHeads'),
    textCondition = document.getElementById('textCondition'),
    reset = document.getElementById('reset'),
    triple = document.getElementById('triple');


function getRandomNumber() {
    return Math.round(Math.random());
}

function resetButton() {
    textTails.value = '';
    textHead.value = '';
    text.textContent = '';
    textCondition.textContent = '';
    if (tails.classList.contains('hide') === true || heads.classList.contains('hide') === true) {
        tails.classList.add('hide');
        heads.classList.add('hide');
    }
}

function throwCoin(e) {
    text.textContent = '';
    textCondition.textContent = '';
    roll.classList.toggle('hide');
    let randNum = getRandomNumber();
    let winTail = 0;
    let winHeads = 0;
    if (tails.classList.contains('hide') === true || heads.classList.contains('hide') === true) {
        tails.classList.add('hide');
        heads.classList.add('hide');
    }
    setTimeout(() => {
        roll.classList.toggle('hide');
        if (e.target.id == 'triple') {
            for(i=0; i < 3; i++) {
                randNum = getRandomNumber();
                if (randNum !== 1) {
                    text.textContent += 'Решка!!!';
                    winTail++;
                } else {
                    text.textContent += 'Орёл!!!';
                    winHeads++;
                }
                if (i === 2 && winTail > winHeads) {
                    textCondition.textContent = `Решка победила - ${textTails.value}`;
                    if (tails.classList.contains('hide') === true) {
                        tails.classList.toggle('hide');
                    }
                    if (heads.classList.contains('hide') === false) {
                        heads.classList.toggle('hide');  
                    }
                } else {
                    textCondition.textContent = `Орёл победил - ${textHead.value}`;
                    if (heads.classList.contains('hide') === true) {
                        heads.classList.toggle('hide');
                    }
                    if (tails.classList.contains('hide') === false) {
                        tails.classList.toggle('hide');  
                    }
                }
            }
        } else {
            if (randNum !== 1 ) {
                text.textContent = `Решка!!!`;
                textCondition.textContent = `${textTails.value}`;
                if (tails.classList.contains('hide') === true) {
                    tails.classList.toggle('hide');
                }
                if (heads.classList.contains('hide') === false) {
                    heads.classList.toggle('hide');  
                }
            } else {
                text.textContent = 'Орёл!!!';
                textCondition.textContent = `${textHead.value}`;
                if (heads.classList.contains('hide') === true) {
                    heads.classList.toggle('hide');
                }
                if (tails.classList.contains('hide') === false) {
                    tails.classList.toggle('hide');  
                }
            }
        }
    }, 3000);
}

button.addEventListener('click',throwCoin);
reset.addEventListener('click', resetButton);
triple.addEventListener('click',throwCoin);