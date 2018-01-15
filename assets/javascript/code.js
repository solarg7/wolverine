window.onload = function() {
	$(document).ready(function() {

		var movieDatabase = [
			{
				name: "Iron Man",
				characters: []
			},
			{
				name: "Iron Man 2",
				characters: []
			},
			{
				name: "The Incredible Hulk",
				characters: []
			},
			{
				name: "Thor",
				characters: []
			},
			{
				name: "Captain America: The First Avenger",
				characters: []
			},
			{
				name: "Marvel's The Avengers",
				characters: []
			},
			{
				name: "Iron Man 3",
				characters: []
			},
			{
				name: "Thor: The Dark World",
				characters: []
			},
			{
				name: "Captain America: The Winter Soldier",
				characters: []
			},
			{
				name: "Guardians of the Galaxy",
				characters: []
			},
			{
				name: "Avengers: Age of Ultron",
				characters: []
			},
			{
				name: "Ant-Man",
				characters: []
			},
			{
				name: "Captain America: Civil War",
				characters: []
			},
			{
				name: "Doctor Strange",
				characters: []
			},
			{
				name: "Guardians of the Galaxy Vol. 2",
				characters: []
			},
			{
				name: "Spider-man: Homecoming",
				characters: []
			},
			{
				name: "Thor: Ragnarok",
				characters: []
			},
			{
				name: "X-Men",
				characters: []
			},
			{
				name: "X-Men 2",
				characters: []
			},
			{
				name: "X-Men: The Last Stand",
				characters: []
			},
			{
				name: "X-Men Origins: Wolverine",
				characters: []
			},
			{
				name: "X-Men: First Class",
				characters: []
			},
			{
				name: "The Wolverine",
				characters: []
			},
			{
				name: "X-Men: Days of Future Past",
				characters: []
			},
			{
				name: "Deadpool",
				characters: []
			},
			{
				name: "X-Men: Apocalypse",
				characters: []
			},
			{
				name: "Logan",
				characters: []
			}
		]

		  // Initialize Firebase
	      // Initialize Firebase
  		var config = {
    		apiKey: "AIzaSyAS24DZUhpFQ34KXStgJf7FGqSvknf9dNk",
    		authDomain: "marvel-test-f32a9.firebaseapp.com",
    		databaseURL: "https://marvel-test-f32a9.firebaseio.com",
    		projectId: "marvel-test-f32a9",
    		storageBucket: "marvel-test-f32a9.appspot.com",
    		messagingSenderId: "1000127600825"
  		};
	  	
	  	firebase.initializeApp(config);










	    var searchMovieInput = "";


		$("#searchMovie").on("click",function(event){

			event.preventDefault();

			searchMovieInput = $("#movieNameId").val().trim();
			console.log(searchMovieInput);

			// Creates Div and puts inside variable
			var searchDiv = $('<div/>', {
				class: "panel panel-default",
				id: "created1"
			});

			// Writes created div to page on click function
			$('#searchContainer').html(searchDiv);

			// Divs for panel then appended to parent div above
			$('<div/>', {
				class: "panel-heading containerHeader",
				text: "Results",
				id: "created2"
			}).appendTo('#created1');

			$('<div/>', {
				class: "panel-body",
				id: "created3"
			}).appendTo('#created1');

			// For each looping through movies to find possible matches from user search
			movieDatabase.forEach(function(movie) {
				var index = movie.name.indexOf(searchMovieInput);
				if (index >= 0 && index <= 27) {
					console.log(movie);

					// Creates buttons from matching movies and appends to earlier div
					$('<input/>', {
						type: "submit",
						id: "searchButton",
						class: "movieButton",
						value: movie.name
					}).appendTo('#created3');

					}

				else {
					console.log("movie not found")
					$('#tipModal').modal('show');
  					}


		});




			firebase.database().ref().on("child_added",function(snapshot){

						console.log(snapshot.val().searchMovieInput);

						//var nextTime = moment(firstTimeMoment.add(lapse)).format();
						//$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

			})


			

			firebase.database().ref().push({
				searchMovieInput: searchMovieInput,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			});



		});

		// Key's to different API's utilized
		var tmdbKey = "53d8544b23ba9e4d06cd7620edc5f51f";
		var marvelKey = "0a862819d585cbff1cebe3a4a9caf6e8";
		var ebayKey = "";


		// On click function from buttons created earlier
		$(document).on("click", ".movieButton", function(event) {
			var movie = this.value;
			console.log(movie);
			var search = "https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&language=en-US&query=" + movie;

			$.ajax({url: search, success: function(result) {
				console.log(result);

				var plot = result.results[0].overview;
				var poster = "http://image.tmdb.org/t/p/w342" + result.results[0].poster_path;
				var img = '<img id="moviePoster" src="'+poster+'"/>';

				$('<div/>', {
					class: "row",
					id: "infoDiv1"
				}).appendTo('#movieInfo');

				$('<div/>', {
					class: "col-md-6",
					id: "infoDiv2"
				}).appendTo('#infoDiv1');

				$('#infoDiv2').html(plot);

				$('<div/>', {
					class: "col-md-1",
					id: "infoDiv4"
				}).appendTo('#infoDiv1');

				$('<div/>', {
					class: "col-md-5",
					id: "infoDiv3"
				}).appendTo('#infoDiv1');

				
				console.log(img);

				$('#infoDiv3').html(img);


			}});

		});





		var top3Movies = [];


		firebase.database().ref().on("child_added",function(snapshot){

			top3Movies.push(snapshot.val().searchMovieInput);

			console.log(snapshot.val().searchMovieInput);

			//console.log(top3Movies);




			//var nextTime = moment(firstTimeMoment.add(lapse)).format();
			//$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

		})


		for (var i = 0; i < 2; i++) {
			var aux = top3Movies [i];
			console.log(aux);
		}
		//for (var i = 0; i < 2; i++) {
			//var aux = top3Movies [i];
			//console.log(aux);
		//}



	});	
	//document
}
//window 