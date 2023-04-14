const date = new Date();
var day = date.getDay();
const openingHours =  document.getElementById('opening-hours-text');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const friday = document.getElementById('friday');

openingHours.innerHTML = 'Testing';

console.log(monday)

if (day == 1) {
    openingHours.innerHTML = '<h3>Closed Today!</h3>';
} else if (day == 2) {
    openingHours.innerHTML = '<h3>Open Today</h3><p>10-16</p>';
} else if (day == 5) {
    openingHours.innerHTML = '<h4>Open Today</h4><p>10:00 - 19:00</p>';
    friday.style.fontWeight = 'bold'
}