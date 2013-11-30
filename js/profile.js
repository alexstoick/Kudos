$.getJSON("http://kudos.fwd.wf/person/1", function(data) {
	var person = data["person"] ;
	var skills = data["skills"] ;
	var kudos  = data["kudos"] ;


	$("#personalDetails").html("Hello " + person["name"] ) ;
	$.each( skills , function ( key , object ) {
		$("#skillsTable").append ( "<tr><td> " + object["skill"] + "</td>" +
									"<td>" + object["kudos"] + "</td></tr>" ) ;
	})
});