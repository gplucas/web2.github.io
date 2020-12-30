<!DOCTYPE html>
<html lang="en">
	<head>
		<title>
		project1
		</title>
	</head>
		<body style="text-align:center;">
        <h2>project1</h2>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	    <div class="alert alert-primary" role="alert">
        This project is under development.
	    </div>
	    <div class="alert alert-secondary" role="alert">
        Working on this project since December 27, 2020.
	    </div>
				 <p class="fw-bold">Calculate the total flight time</p>
				 <input type="number" id="num1">
				 <input type="number" id="num2">
				 <button onclick="calculate()">Calculate</button><br><br>
				 <p id="answer"></p>			 
			<script>
				function calculate()
		{
			var field1=document.getElementById("num1").value;
			var field2=document.getElementById("num2").value;
			var result=parseFloat(field2)-parseFloat(field1);
			if(!isNaN(result));
			var result = result.toFixed(1);
			{
				document.getElementById("answer").innerHTML="Total flight time "+result;
			}
		}
			</script>
  </body>
</html>
