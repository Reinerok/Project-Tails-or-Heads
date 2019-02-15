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

function throwCoin(e = false) {
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
    let test;
    if (e !== false) {
        test = e.target.id == 'triple';
    } else {
        test = false;
    }

    setTimeout(() => {
        roll.classList.toggle('hide');
        if (test) {
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

let myElement = document.body;

var mc = new Hammer.Manager(myElement);


// Tap recognizer with minimal 2 taps
mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
// Single tap recognizer
//mc.add( new Hammer.Tap({ event: 'singletap' }) );


// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
/*mc.get('doubletap').recognizeWith('singletap');
// we only want to trigger a tap, when we don't have detected a doubletap
mc.get('singletap').requireFailure('doubletap');*/


mc.on("doubletap", function(ev) {
    throwCoin();
});