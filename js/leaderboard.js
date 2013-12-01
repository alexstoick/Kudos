google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback ( startLoadingJSON ) ;
function startLoadingJSON () {
	$.getJSON ( "http://kudos.fwd.wf/leaderboard" , function ( data) {

		$.each ( data , function ( key , object ) {
			$("#leaderboard").append (
				'<div class="panel panel-default">' +
					'<div class="panel-heading">' +
						'<h4 class="panel-title">' +
							'<a data-toggle="collapse" data-parent="#accordion" href="#'+object["id"]+'">' +
								object[ "name" ] + "    " + object["kudos"] + " " +
							'</a>' +
						'</h4>' +
					'</div>'+
					'<div id="' + object["id"] +'" class="panel-collapse collapse in">' +
						'<div class="panel-body">' +
							'<div class="tableSpace">' +

							'<table class="table-stripped table skillsTable" id="skillsTable'+object["id"]+'">' +
								'<thead>' +
									'<th style="text-align: center"> Skill  </th>' +
									'<th style="text-align: center"> Kudos  </th>' +
									'<th style="text-align: center"> Badges </th>' +
								'</thead>' +
							'</table>' +

							'<div id="piechart'+object["id"]+'" class="departmentsTable" style="width: 500px; height: 350px;"></div>'+
						'</div>' +
					'</div>' +
				  '</div>'
				);
			drawChart ( object["id"] ) ;
		});

	}) ;
}

function drawChart( id ) {
	var data;
	$.getJSON("http://kudos.fwd.wf/person/" + id , function(data) {
	var person = data["person"] ;
	var skills = data["skills"] ;
	var kudos  = data["kudos"] ;
	var departments = data["department_kudos"];

	$.each( skills , function ( key , object ) {
		if(object["kudos"] >= 5){
			$("#skillsTable"+id).append ( "<tr><td> " + object["skill"] + "</td>" +
										"<td>" + object["kudos"] + "</td><td><span class=\"glyphicon glyphicon-heart\"></span></td></tr>") ;
		}
		else{
			$("#skillsTable"+id).append ( "<tr><td> " + object["skill"] + "</td>" +
								"<td>" + object["kudos"] + "</td><td><span class=\"glyphicon glyphicon-heart-empty\"></span></td></tr>") ;
		}
	});

	var visualization_data = [] ;
	visualization_data.push(["Department","Kudos"]);

	$.each( departments , function ( key , value ) {
		//console.log(key);
		visualization_data.push([key,value]);
		// "['" + key + "," + value + "']"
	});

	console.log(visualization_data);
	data = new google.visualization.arrayToDataTable(visualization_data);
	var options = {
		title: 'Kudos Breakdown by Department',
		'width': 700,
		'height':450
		// colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'+id));
	chart.draw(data, options);
});

};
