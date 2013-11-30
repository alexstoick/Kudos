$.getJSON("http://kudos.fwd.wf/person", function(data) {
	var names = [];
	$.each(data, function(key, object) {
		names.push(object["name"]);
	});
	console.log(names);
	$('#kudosSearchBoxInput').typeahead([ {
		name : 'names',
		local : names
	} ]);
});
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
	$('#helpPage').addClass('active');
	showKudosBox();
});