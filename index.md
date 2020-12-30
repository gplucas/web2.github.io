<html lang="en">
	<body style="text-align:center;">
	<a href="https://ibb.co/P9nd1wx"><img src="https://i.ibb.co/2sQTcgq/Screenshot-4.jpg" alt="Screenshot-4" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>high up 2 livro</a><br />
        <h2>project1</h2>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	    <div class="alert alert-primary" role="alert">
        This project is under development.
	    </div>
	    <div class="alert alert-secondary" role="alert">
        Working on this project since December 27, 2020.
	    </div>
				 <p class="fw-bold">Calculate the total flight time</p>
				 <input type="number" id="num1" placeholder="Hobbs before start">
				 <input type="number" id="num2" placeholder="Hobbs after shutdown">
				 <button onclick="calculate0()">Calculate</button><br><br>
				 <p id="answer0"></p>

				 <p class="fw-bold">Calculate fuel consumption</p>
				 <p>NOTE: This resource calculates only the units inserted. Also, it considers that the pilot in command will perform any subsequent calculations to adapt to aircraft fuel units (e.g. pounds, liters, kilograms)<p>
				 <input type="number" id="num3" placeholder="Units before start">
				 <input type="number" id="num4" placeholder="Units after shutdown">
				 <button onclick="calculate1()">Calculate</button><br><br>
				 <p id="answer1"></p>					 
			<script>
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
			</script>
