var d, hours, minutes;

d = new Date();
hours = d.getHours();
minutes = d.getMinutes();
seconds = d.getSeconds()

document.getElementById('user').innerHTML = '[agrossano@me] dice-O-matic';
document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
