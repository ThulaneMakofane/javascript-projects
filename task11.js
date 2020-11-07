//task 11



function common(string1,string2) {
  var common = {};
  
  for(var i=0; i < string1.length; i++) {
    common[string1.charAt(i)] = 1;
  }
 
  var commonChars =[]; 
  for(var i=0; i < string2.length; i++) {
    if( common[string2.charAt(i)] == 1) {
      commonChars.push(string2.charAt(i)); 
    }
  }
  
  common = commonChars.join(""); 
  console.log(common);
}

common("string", 'strong');
