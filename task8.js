function realTime(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
     
  if(hours >1 && minutes >1 ){
   console.log(num + " will become" + hours+  "hours" + "and" + minutes + " minutes");
  }else if(hours<=1 && minutes<=1 ){
console.log(num + " will become" + hours+  "hour" + "and" + minutes + " minute");
  }else if(hours>1 && minutes<=1){
    console.log(num + " will become" + hours+  "hours" + "and" + minutes + " minute");
  }else if(hours<=1 && minutes>1){
    console.log(num + " will become" + hours+  "hour" + "and" + minutes + " minutes");
  }
 }
realTime(123);


