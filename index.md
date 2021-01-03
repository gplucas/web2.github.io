<html lang="en">
	<body style="text-align:center;">
        <h2>Flight Support</h2>
	<h5>Helping you keep your documentation up to date.</h5><br>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
				 <p class="fw-bold">Calculate the total flight time</p>
		      		 <input type="number" id="num1" placeholder="Hobbs before start">
				 <input type="number" id="num2" placeholder="Hobbs after shutdown">
				 <button onclick="calculate0()">Calculate</button><br><br>
				 <p id="answer0"></p>

				 <p class="fw-bold">Calculate fuel consumption</p>
				 <div class="alert alert-secondary" role="alert">
  				 NOTE: This resource calculates only the units inserted. Also, it considers that the pilot in command will perform any subsequent calculations to adapt to aircraft fuel units (e.g. pounds, liters, kilograms)
                                 </div>
				 <input type="number" id="num3" placeholder="Units before start">
				 <input type="number" id="num4" placeholder="Units after shutdown">
				 <button onclick="calculate1()">Calculate</button><br><br>
				 <p id="answer1"></p>
			         	<script src="script.md"></script>
					
					<a href="gplucas/web2.github.io/g58/S1&General.pdf" target="_blank">SECTION 1 - General</a>
	</body>
</html>
