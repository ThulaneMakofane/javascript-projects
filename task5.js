// task 5
function areaCalculations(){
 var side1= 2;
 var side2=2;
 var side3=2;

const Parameter = (side1 +side2 + side3 ) /2;
const Area = Math.sqrt(Parameter * (Parameter- side1) * (Parameter - side2)* (Parameter-side3));
return Area;
}
console.log(" The area of this triangle is "+ areaCalculations());
