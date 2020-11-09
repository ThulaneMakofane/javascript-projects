//task 8

function realTime(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  //return hours + ":" + minutes;         
  console.log(num + " will become" + hours+  "hour" + "and" + minutes + " minutes")
}

realTme(71);
