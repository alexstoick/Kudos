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
		var names = [];
		usersObject = data ;
		$.each(data, function(key, object) {
			names.push(object["name"]);
		});
		$('#kudosSearchBoxInput').typeahead([ {
			name : 'names',
			local : names
		} ]);
	});
});
