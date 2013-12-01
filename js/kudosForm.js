$("#kudosForm").submit(
		function(event) {
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
				$('#kudosSearchBoxInput').select2("container").show();
				$('#kudosSearchBoxSkills').select2("container").hide();
				$('#kudosSearchBox button').attr('disabled', 'disabled');
			});
		});