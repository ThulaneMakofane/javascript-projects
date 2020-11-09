// task 5
function areaCalculations(){
 var side1= 2;
 var side2=2;
 var side3=2;

const parameter = (side1 +side2 + side3 ) /2;
const area = Math.sqrt(parameter * (parameter- side1) * (parameter - side2)* (parameter-side3));
return area;
}
console.log(" The area of this triangle is "+ areaCalculations());
