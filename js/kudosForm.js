$("#kudosForm").submit(
		function(event) {
			if ($("#kudosSearchBoxSkills").select2("val").length < 1) { 
				$('#warningModal').modal('show');
				return false;
			}
			event.preventDefault();
			var form = $(this);
			var skills = $("#kudosSearchBoxSkills").select2("val").join(" ");
			var data = {
				"skills" : skills,
				"sender" : 3
			};
			var url = "http://kudos.fwd.wf/person/"
					+ $("#kudosSearchBoxInput").select2("val");
			var postAction = $.post(url, data);
			postAction.done(function(data) {
				console.log(data);
				$("#kudosSearchBoxInput").select2('val', 'All');
				$("#kudosSearchBoxSkills").select2('val', 'All');
				$('#kudosSearchBoxInput').select2("container").show();
				$('#kudosSearchBoxSkills').select2("container").hide();
			});
		});