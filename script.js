				function calculate0()
		{
			var field1=document.getElementById("num1").value;
			var field2=document.getElementById("num2").value;
			var result=parseFloat(field2)-parseFloat(field1);
			if(!isNaN(result));
			var result = result.toFixed(1);
			{
				document.getElementById("answer0").innerHTML="Total flight time "+result;
			}
		}
				function calculate1()
		{
			var field1=document.getElementById("num3").value;
			var field2=document.getElementById("num4").value;
			var result=parseFloat(field1)-parseFloat(field2);
			if(!isNaN(result));
			var result = result.toFixed(0);
			{
				document.getElementById("answer1").innerHTML="Total fuel burned "+result;
			}
		}

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

function fuelConverterusgaltokilograms(valNum)
{
  document.getElementById("outputKilogramsAvgas3").innerHTML=valNum*2.81;
}

function fuelConverterusgaltopounds(valNum)
{
  document.getElementById("outputPoundsAvgas3").innerHTML=valNum*6.20;
}

function fuelConverterusgaltoliters(valNum)
{
  document.getElementById("outputLitersAvgas2").innerHTML=valNum*3.79;
}

function fuelConverterltstokgsavgs(valNum)
{
  document.getElementById("outputKilogramsAvgas2").innerHTML=valNum*0.74;
}

function fuelConverterltstolbsavgs(valNum)
{
  document.getElementById("outputPoundsAvgas2").innerHTML=valNum*1.64;
}

function fuelConverterltstousgalavgs(valNum)
{
  document.getElementById("outputUsGalAvgas2").innerHTML=valNum*0.26;
}

function fuelConverterlbstokgsavgs(valNum)
{
  document.getElementById("outputKilogramsAvgas").innerHTML=valNum*0.45;
}

function fuelConverterlbstoltsavgs(valNum)
{
  document.getElementById("outputLitersAvgas").innerHTML=valNum*0.61;
}

function fuelConverterlbstousgalavgs(valNum)
{
  document.getElementById("outputUsGalAvgas").innerHTML=valNum*0.16;
}

function weightConverterkgtolb(valNum) 
{
  document.getElementById("outputPounds").innerHTML=valNum*2.2046;
}

function fuelConverterlbtousgal(valNum)
{
  document.getElementById("outputUsGal").innerHTML=valNum*0.15;
}

function fuelConverterlbtolts(valNum)
{
  document.getElementById("outputLiters").innerHTML=valNum*0.57;
}

function fuelConverterlbtokgs(valNum)
{
  document.getElementById("outputKgs").innerHTML=valNum*0.45;
}

function fuelConverterltstousgal(valNum)
{
  document.getElementById("outputUsGal2").innerHTML=valNum*0.26;
}

function fuelConverterltstolbs(valNum)
{
  document.getElementById("outputPounds2").innerHTML=valNum*1.77;
}

function fuelConverterltstokgs(valNum)
{
  document.getElementById("outputKgs2").innerHTML=valNum*0.80;
}

function fuelConverterusgaltolts(valNum)
{
  document.getElementById("outputLiters2").innerHTML=valNum*3.79;
}

function fuelConverterusgaltolbs(valNum)
{
  document.getElementById("outputPounds3").innerHTML=valNum*6.70;
}

function fuelConverterusgaltokgs(valNum)
{
  document.getElementById("outputKgs3").innerHTML=valNum*3.04;
}

function fuelConverteruskgstousgal(valNum)
{
  document.getElementById("outputUsGal3").innerHTML=valNum*0.33;
}

function fuelConverteruskgstolbs(valNum)
{
  document.getElementById("outputPounds4").innerHTML=valNum*2.21;
}

function fuelConverteruskgstolts(valNum)
{
  document.getElementById("outputLiters3").innerHTML=valNum*1.25;
}