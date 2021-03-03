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
