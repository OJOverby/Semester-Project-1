const date = new Date();
var day = date.getDay();
const openingHours =  document.getElementById('opening-hours-text');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');

var checkbox = document.getElementById('menu-checkbox');
const menuButton = document.querySelector('.mobile-menu-button');

var spaceship = document.querySelector(".little-rocket");
var  randomNumber = Math.floor((Math.random()*7) + 1 );

//Opening Hours//

if (day == 1) {
    openingHours.innerHTML = '<h3>Closed Today!</h3>';
    monday.style.fontWeight = 'bold';
} else if (day == 2) {
    openingHours.innerHTML = '<h3>Open Today</h3><p>10-16</p>';
    tuesday.style.fontWeight = 'bold';
} else if (day == 3) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>10:00 - 16:00</p>';
    wednesday.style.fontWeight = 'bold';
} else if (day == 4) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>10:00 - 16:00</p>';
    thursday.style.fontWeight = 'bold';
}
 else if (day == 5) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>10:00 - 19:00</p>';
    friday.style.fontWeight = 'bold';
}
else if (day == 6) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>09:00 - 16:00</p>';
    saturday.style.fontWeight = 'bold';
}
else if (day == 0) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>09:00 - 13:00</p>';
    sunday.style.fontWeight = 'bold';
}

// Hamburger menu//

menuButton.addEventListener('click', () => {
    if (checkbox.checked==0){
        menuButton.classList.add('open');
    } else {
        menuButton.classList.remove('open');
    }
})

 //Animation change


function newNumber () {
    randomNumber = Math.floor((Math.random()*7) + 1 );
    changeAnimation();
}

function changeAnimation () {
    if (randomNumber == 1) {
        spaceship.src="/images/rocket.png";
        spaceship.style.animation = "spaceship 6s linear infinite";
    } else if (randomNumber == 2) {
        spaceship.src="/images/rocket.png";
        spaceship.style.animation = "spaceship2 6s linear infinite";
    } else if (randomNumber == 3) {
        spaceship.src="/images/rocket.png";
        spaceship.style.animation = "spaceship3 6s linear infinite";
    } else if (randomNumber == 4) {
        spaceship.src="/images/comet.png";
        spaceship.style.animation = "comet 6s linear infinite";
    } else if (randomNumber == 5) {
        spaceship.src="/images/comet.png";
        spaceship.style.animation = "comet2 6s linear infinite";
    } else if (randomNumber == 6) {
        spaceship.src="/images/ufo.png";
        spaceship.style.animation = "ufo 6s linear infinite";
    } else if (randomNumber == 7) {
        spaceship.src="/images/ufo.png";
        spaceship.style.animation = "ufo2 6s linear infinite";
    }
    
}

setInterval(newNumber, 6000);
