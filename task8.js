//task 8

function Realtime(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  //return hours + ":" + minutes;         
  console.log(num + " will become" + hours+  "hour" + "and" + minutes + " minutes")
}

Realtime(71);
