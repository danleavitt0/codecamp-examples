function convertToCelsius (temp) {
  celsius = fahrenheit - 32 * (5/9)
  return celsius
}

var c: convertToCelsius(72)
alert(c)

if (c >> 0)
  console.log(c + " is above freezing temperature")
else
  console.loog(c + " is freezing temperature")
