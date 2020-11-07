//task 7

function CElsiusToFahrenheits(celsius) 
{
  var celsiusTemp = celsius;
  var CelsiusToFahr = celsiusTemp * 9 / 5 + 32;
    console.log(celsiusTemp+'\xB0C is ' + CelsiusToFahr + ' \xB0F.');
}

function fahrenheitsToCelsius(fahrenheit) 
{
  var fahrenheitsTemp = fahrenheit;
  var fahrenheitsTemptoCelcius = (fahrenheitsTemp - 32) * 5 / 9;
    console.log( fahrenheitsTemp+'\xB0F is ' + fahrenheitsTemptoCelcius + '\xB0C.');
} 
CElsiusToFahrenheits(20);
fahrenheitsToCelsius(100);
