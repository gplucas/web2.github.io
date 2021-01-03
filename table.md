				<body>
					<input type="text" id="txt0" placeholder="Date">
				<br><br>
					<input type="text" id="txt" placeholder="Departure">
				<br><br>
					<input type="text" id="txt2" placeholder="Arrival">
				<br><br>
					<input type="number" id="num1" placeholder="Flight time">
				<br><br>
					<input type="number" id="fuel" placeholder="Fuel burned">
				<br><br>
				<button id="btn">Flight Report</button>
				<br><br>
					<table id="myTable" border="1">
					<thead>
					<tr>
						<th>Date</th>
						<th>Departure</th>
						<th>Arrival</th>
						<th>Total flight time</th>
						<th>Total fuel burned</th>
					</tr>
					</thead>
			<tbody>
			</tbody>
			</table>
				<script>
					$(document).ready(function () {
					$("#btn").click(function () {

					$("#myTable").append(`
					<tr>
					<td>${$("#txt0").val()}</td>
					<td>${$("#txt").val()}</td>
					<td>${$("#txt2").val()}</td>
					<td>${$("#num1").val()}</td>
					<td>${$("#fuel").val()}</td>
			        </tr>`)
  });
});
