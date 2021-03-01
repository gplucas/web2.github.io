function weightConverterlbtokg(valNum) 
{
  document.getElementById("outputGrams").innerHTML = valNum/2.2046;
}

function fuelConverterkgstopounds1(valNum)
{
  document.getElementById("outputPoundsAvgas4").innerHTML=valNum*2.21;
}

function fuelConverterkgstoliters1(valNum)
{
  document.getElementById("outputLitersAvgas3").innerHTML=valNum*1.35;
}

function fuelConverterkgstousgal1(valNum)
{
  document.getElementById("outputUsGalAvgas3").innerHTML=valNum*0.36;
}
