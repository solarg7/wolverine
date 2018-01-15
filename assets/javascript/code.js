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
				if (index >= 0) {
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




			//firebase.database().ref().on("child_added",function(snapshot){

						//console.log(snapshot.val().searchMovieInput);

						//var nextTime = moment(firstTimeMoment.add(lapse)).format();
						//$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

			//})


			

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



		var top3Movies;
		top3Movies= [{term:"PZ", counter: 0}];
		//console.log(top3Movies.length);

		var maxCounter = 1;
		var maxTerm = top3Movies[0].term;

		//console.log(top3Movies.term + "top3Movies[q]="+  top3Movies.length);


		firebase.database().ref().on("child_added",function(snapshot){

			//top3Movies.push(snapshot.val().searchMovieInput);

			//console.log(snapshot.val().searchMovieInput);

			//console.log(top3Movies);

			var trendMovie= snapshot.val().searchMovieInput;


			var lengthArray = top3Movies.length;

			var flag = 0;

			var q = 0;

			var compareMovie = top3Movies[0].term;
			//console.log(compareMovie + "hola"+ "flag = "+ flag +"top3Movies[q]="+ top3Movies.length);

			do{

				compareMovie = top3Movies[q].term;
				//console.log("q=  "+ q);
				//console.log(top3Movies[q].term);
				//console.log("vector salva" + compareMovie + "trendMovie"+ trendMovie+ top3Movies.length + "q+" + q);


				
				if(trendMovie == compareMovie){
					top3Movies[q].counter++;
					flag = 1;
					q++;
					//console.log("en IF flag = "+ flag);
				}

				var largo = top3Movies.length
				//console.log("larg" + largo);
				if(q >= largo - 1 && trendMovie != compareMovie){
					top3Movies.push({term: trendMovie, counter:1});
					flag = 1;
					
					//console.log("en IF flag = "+ flag + "valor i=" + q);

					q++;
				}



				q = q + 1;
			}
			while(q < lengthArray && flag == 0);

			//console.log(top3Movies);
		


		});




		//var k=0;

		var topMovie2;
		topMovie2= [{term:"PZ", counter: 0}];
		
		console.log(top3Movies);
		var largo1= top3Movies.length;
		console.log("lenght"+ top3Movies.length+ "    "+ largo1);		
		var maxCounter11 = 1;
		for (var i = 0; i < top3Movies.length;  i++) {
			console.log(top3Movies[i].counter);
			if(top3Movies[i].counter >= maxCounter11){
				maxCounter11 = top3Movies[i].counter;
				maxTerm = top3Movies[i].term;
			}
			//else{
				//topMovie2.push({term:top3Movies[i].term, counter:top3Movies[i].counter});
			//}			
		}
		console.log("contador"+ maxCounter + "maxterm"+ maxTerm);
		$("#topMovie1").html(maxTerm);

		//var k=0;
		//var topMovie3;
		//topMovie3= [{term:"PZ", counter: 0}];
		//var maxCounter1 = 1;
		//for (var i = 0; i < topMovie2.length;  i++) {
			//if(topMovie2[i].counter >= maxCounter1){
				//maxCounter = topMovie2[i].counter;
				//maxTerm = topMovie2[i].term;
			//}
			//else{
				//topMovie3.push({term:topMovie2[i].term, counter:topMovie2[i].counter});
				//k++;
			//}			
		//}			
		//$("#topMovie1").append(maxTerm);

			
		//maxCounter = 1;
		//for (var i = 0; i < topMovie3.length;  i++) {
			//if(topMovie3[i].counter >= maxCounter){
				//maxCounter = topMovie3[i].counter;
				//maxTerm = topMovie3[i].term;
			//}
		//}			
		//$("#topMovie1").append(maxTerm);


			//console.log(topMovie2);
			//console.log(topMovie3);	


		//for (var i = 0; i < 2; i++) {
			//var aux = top3Movies [i];
			//console.log(aux);
		//}
/*
	//on click for the modal tip
	(function(){
  var $content = $('#modal-tip').detach();   // Remove modal from page

  $('#tip').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());
	//end on click for the modal tip


	//modal window js
	var modal = (function() {                         // Declare modal object

  var $window = $(window);                        // Store the window
  var $modal = $('<div class="modal"/>');         // Create markup for modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">close</button>');

  $modal.append($content, $close);                // Add close button to modal

  $close.on('click', function(e){                 // If user clicks on close
    e.preventDefault();                           // Prevent link behavior
    modal.close();                                // Close the modal window
  });

  return {                                        // Add code to modal
    center: function() {                          // Define center() method
      // Calculate distance from top and left of window to center the modal
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({                                // Set CSS for the modal
        top:top + $window.scrollTop(),            // Center vertically
        left:left + $window.scrollLeft()          // Center horizontally
      });
    },
    open: function(settings) {                     // Define open() method
      $content.empty().append(settings.content);   // Set new content of modal

      $modal.css({                                 // Set modal dimensions
        width: settings.width || 'auto',           // Set width
        height: settings.height || 'auto'          // Set height
      }).appendTo('body');                         // Add it to the page

      modal.center();                              // Call center() method
      $(window).on('resize', modal.center);        // Call it if window resized
    },
    close: function() {                            // Define close() method
      $content.empty();                            // Remove content from modal
      $modal.detach();                             // Remove modal from page
      $(window).off('resize', modal.center);       // Remove event handler
    }
  };
}());
	//end modal js
*/







	});	
	//document
}
//window 