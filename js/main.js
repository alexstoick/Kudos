var userObject;
function showHelpBox() {
	$('#kudosSearchBox').hide();
	$('#helpSearchBox').show();
	$('#helpPage').addClass('active');
	$('#kudosPage').removeClass('active');

}
function showKudosBox() {
	$('#kudosPage').addClass('active');
	$('#helpPage').removeClass('active');
	$('#kudosSearchBox').show();
	$('#helpSearchBox').hide();
}
$(document).ready(function() {
	showKudosBox();


	$.getJSON("http://kudos.fwd.wf/person", function(data) {
		var users = [];
		usersObject = data;
		$.each(data, function(key, object) {
			users.push( { "text":object["name"],"id":object["id"]});
		});
		
		$("#kudosSearchBoxInput").select2({
			data : users,
			width: 'resolve'
		});

		/*
		 * $('#kudosSearchBoxInput').typeahead([ { name : 'names', local : names }
		 * ]);
		 */
	});
});
