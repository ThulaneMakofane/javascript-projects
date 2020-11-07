//task 5
function AREAofTriangle(side1,side2,side3){
 
const Parameter = (side1 +side2 + side3 ) /2;
const Area = Math.sqrt(Parameter * (Parameter- side1) * (Parameter - side2)* (Parameter-side3));
 
console.log(" The area of this triangle is "+ Area);



}

AREAofTriangle();
