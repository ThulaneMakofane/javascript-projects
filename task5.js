// task 5
function areaCalculations(side1,side2,side3){

const parameter = (side1 +side2 + side3 ) /2;
const area = Math.sqrt(parameter * (parameter- side1) * (parameter - side2)* (parameter-side3));
return area;
}
areaCalculations(2,2,2);
