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
