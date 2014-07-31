function celsius()
{
temperature = document.myFORM.FAHRENHEIT.value;
temperature = (temperature - 32) / 1.8;
document.myFORM.CELSIUS.value = encodeURIComponent(temperature);
}

function fahrenheit()
{
temperature = document.myFORM.CELSIUS.value;
temperature = temperature * 1.8 + 32;
document.myFORM.FAHRENHEIT.value = decodeURIComponent(temperature);
}