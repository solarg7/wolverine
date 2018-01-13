window.onload = function() {
	$(document).ready(function() {

		  // Initialize Firebase
	      // Initialize Firebase
	  	var config = {
		    apiKey: "AIzaSyB8qtmHeIIwlgLmQN_ao1LZjWbhxaKQYgg",
		    authDomain: "wolverinecomics-76816.firebaseapp.com",
		    databaseURL: "https://wolverinecomics-76816.firebaseio.com",
		    projectId: "wolverinecomics-76816",
		    storageBucket: "wolverinecomics-76816.appspot.com",
		    messagingSenderId: "521524047251"
	  	};
	  	firebase.initializeApp(config);

	    var searchMovieInput = "";


		$("#searchMovie").on("click",function(event){

			event.preventDefault();

			searchMovieInput = $("#movieNameId").val().trim();
			console.log(searchMovieInput);

			firebase.database().ref().on("child_added",function(snapshot){

						console.log(snapshot.val().searchMovieInput);

						//var nextTime = moment(firstTimeMoment.add(lapse)).format();
						$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

			})


			

			firebase.database().ref().push({
				searchMovieInput: searchMovieInput,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			});



		});




		var top3Movies = [];


		firebase.database().ref().on("child_added",function(snapshot){

			top3Movies.push(snapshot.val().searchMovieInput);

			console.log(snapshot.val().searchMovieInput);

			//console.log(top3Movies);




			//var nextTime = moment(firstTimeMoment.add(lapse)).format();
			$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

		})


		for (var i = 0; i < 2; i++) {
			var aux = top3Movies [i];
			console.log(aux);
		}


	});	
	//document
}
//window 