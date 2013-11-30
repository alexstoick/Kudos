
	$("#kudosForm").submit ( function (event) {

		console.log (usersObject) ;

		event.preventDefault();

		var form = $( this ) ;
		var skills = form.find( "input[name='skills']" ).val();
		var personName = form.find( "input[name='personName']" ).val();

		console.log ( personName ) ;
		var receiver_id = 1 ;

		$.each(usersObject, function(key, object) {
			if ( object["name"] == personName )
			{
				receiver_id = object["id"] ;
			}
		} );

		console.log ( "receiver_id " +receiver_id ) ;

		var data = { "skills" : skills , "sender" : 2 } ;

		var url = "http://kudos.fwd.wf/person/" + receiver_id ;

		var postAction = $.post ( url , data ) ;

		postAction.done(function( data ) {
			console.log ( data ) ;
		});


		console.log ( skills + " " + personName ) ;



	}) ;