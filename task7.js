//task 7

function celsiusToFahrenheits(celsius) 
{
  var celsiusTemp = celsius;
  var celsiusToFahr = celsiusTemp * 9 / 5 + 32;
    console.log(celsiusTemp+'\xB0C is ' + celsiusToFahr + ' \xB0F.');
}

function fahrenheitsToCelsius(fahrenheit) 
{
  var fahrenheitsTemp = fahrenheit;
  var fahrenheitsTempToCelcius = (fahrenheitsTemp - 32) * 5 / 9;
    console.log( fahrenheitsTemp+'\xB0F is ' + fahrenheitsTempToCelcius + '\xB0C.');
} 
celsiusToFahrenheits(20);
fahrenheitsToCelsius(100);

