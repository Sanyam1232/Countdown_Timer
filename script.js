var destination = new Date("August 31, 2024 19:34:10").
getTime();
var x=setInterval(function() {
var now = new Date().getTime();
var count_difference= destination-now ;
var days = count_difference/(60*60*24*1000);
days=parseInt(days);
var hours=Math.floor((count_difference%(1000*60*60*24))/(1000*60*60));
var minute=Math.floor((count_difference%(1000*60*60))/(1000*60));
var sec=Math.floor((count_difference%(1000*60))/(1000));

document.getElementById("timer").innerHTML = days + "d, "+hours + "hr: "+ minute + "m: "+ sec + "s";

},1000);
