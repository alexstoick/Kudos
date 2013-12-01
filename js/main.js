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

$(document).ready(

function() {
	showKudosBox();
	$.getJSON("http://kudos.fwd.wf/person", function(data) {
		usersObject = data;
		var users = [];
		$.each(data, function(key, object) {
			users.push({
				"id" : object["id"],
				"text" : object["name"]
			});
		});

		$("#kudosSearchBoxInput").select2({
			data : users,
			width : 'resolve',
			closeOnSelect : true,
			containerCssClass : 'selectSearch',

		});
	});
	$.getJSON("http://kudos.fwd.wf/skill", function(data) {
		$("#kudosSearchBoxSkills").select2({
			tags : data,
			width : 'resolve',
			multiple : true,
			matcher : function(term, text) {
				return text;
			},
			containerCssClass : 'selectSearch',

		});
	});
	$('#kudosSearchBoxInput').on('select2-selected', function(e) {
		$('#kudosSearchBoxInput').select2("container").hide();
		$('#kudosSearchBoxSkills').select2("container").show();
		$('#kudosSearchBox button').show();
	});

	$('#kudosSearchBoxSkills').on("select2-selecting", function(e) {
		//if ($("#kudosSearchBoxSkills").select2("val").length > 0) {
			//$('#kudosSearchBox button').removeAttr("disabled");
		//}
		// alert($("#kudosSearchBoxSkills").select2("val").join(" "));
	});

});
