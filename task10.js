//task 10
 function vowelsPrint(string) {
     const vowels = 'AEIOUaeiou';
     var phonetics = [];
     for (var i = 0; i < string.length; i++) {
     if (vowels.includes(string[i])) {
     console.log(string[i])
     } else {
     phonetics += string[i] + '\n';
     }
     }

}
vowelsPrint("makofanethulanE")
