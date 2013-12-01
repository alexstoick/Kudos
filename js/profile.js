var visualization_data = [];
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

 function drawChart() {
 	var data;
 	$.getJSON("http://kudos.fwd.wf/person/1", function(data) {
		var person = data["person"] ;
		var skills = data["skills"] ;
		var kudos  = data["kudos"] ;
		var departments = data["department_kudos"];

		$("#personalDetails").html("Hello " + person["name"] ) ;

		$.each( skills , function ( key , object ) {
			if(object["kudos"] >= 5){
				$("#skillsTable").append ( "<tr><td> " + object["skill"] + "</td>" +
											"<td>" + object["kudos"] + "</td><td><span class=\"glyphicon glyphicon-heart\"></span></td></tr>") ;
			}
			else{
				$("#skillsTable").append ( "<tr><td> " + object["skill"] + "</td>" +
									"<td>" + object["kudos"] + "</td><td><span class=\"glyphicon glyphicon-heart-empty\"></span></td></tr>") ;
			}
		});

		visualization_data.push(["Department","Kudos"]);

		$.each( departments , function ( key , value ) {
			//console.log(key);
			visualization_data.push([key,value]);
			// "['" + key + "," + value + "']"
		});

		console.log("test");
		console.log(visualization_data);
		data = new google.visualization.arrayToDataTable(visualization_data);
		var options = {
			title: 'Kudos Breakdown by Department',
			'width': 700,
			'height':450
			// colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		chart.draw(data, options);
	});

  };






