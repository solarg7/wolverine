window.onload = function() {
	$(document).ready(function() {

		// Database of movies to interact with tmdb and user
		var movieDatabase = [
			{
				name: "Iron Man",
				heroes: ["Iron Man", "James Rhodes"],
				issue: "Tales of Suspense Vol 1 #39",
				search: "1"
			},
			{
				name: "Iron Man 2",
				heroes: ["Iron Man", "Nick Fury", "Black Widow", "James Rhodes"],
				issue: "Demon in a Bottle",
				search: "2"
			},
			{
				name: "The Incredible Hulk",
				heroes: ["Hulk"],
				issue: "Tales to Astonish #90",
				search: "3"
			},
			{
				name: "Thor",
				heroes: ["Thor", "Loki", "Hawkeye"],
				issue: "Journey into Mystery #83",
				search: "4"
			},
			{
				name: "Captain America: The First Avenger",
				heroes: ["Captain America", "Bucky Barnes", "Red Skull", "Nick Fury"],
				issue: "Captain America Vol 11",
				search: "5"
			},
			{
				name: "Marvel's The Avengers",
				heroes: ["Hulk", "Iron Man", "Nick Fury", "Black Widow", "Loki", "Hawkeye", "Captain America", "Thor"],
				issue: "The Avengers Vol 1 #1",
				search: "6"
			},
			{
				name: "Iron Man 3",
				heroes: ["Iron Man", "James Rhodes"],
				issue: "Iron Man Extremis #1",
				search: "7"
			},
			{
				name: "Thor: The Dark World",
				heroes: ["Thor", "Loki", "Malekith"],
				issue: "Thor God of Thunder",
				search: "8"
			},
			{
				name: "Captain America: The Winter Soldier",
				heroes: ["Captain America", "Winter Soldier", "Nick Fury", "Black Widow", "Falcon"],
				issue: "Captain America Vol 5 #11",
				search: "9"
			},
			{
				name: "Guardians of the Galaxy",
				heroes: ["Peter Quill", "Gamora", "Drax", "Groot", "Rocket Racoon", "Ronan", "Yondu", "Nebula", "Thanos"],
				issue: "Guardians of the Galaxy #1",
				search: "10"
			},
			{
				name: "Avengers: Age of Ultron",
				heroes: ["Iron Man", "Thor", "Hulk", "Captain America", "Black Widow", "Hawkeye", "Ultron", "Nick Fury", "James Rhodes", "Quicksilver", "Scarlet Witch", "Vision", "Falcon"],
				issue: "Avengers Vol 1 #54",
				search: "11"
			},
			{
				name: "Ant-Man",
				heroes: ["Ant-Man", "Yellowjacket", "Falcon"],
				issue: "Marvel Premiere Vol 1 #47",
				search: "12"
			},
			{
				name: "Captain America: Civil War",
				heroes: ["Captain America", "Iron Man", "Black Widow", "Winter Soldier", "Falcon", "James Rhodes", "Hawkeye", "Black Panther", "Vision", "Scarlet Witch", "Ant-Man", "Spider-Man", "Crossbones"],
				issue: "Marvel Civil War #1",
				search: "13"
			},
			{
				name: "Doctor Strange",
				heroes: ["Doctor Strange", "Kaecilius", "Mordo", "Dormammu", "Ancient One"],
				issue: "Strange Tales #110",
				search: "14"
			},
			{
				name: "Guardians of the Galaxy Vol. 2",
				heroes: ["Peter Quill", "Gamora", "Drax", "Groot", "Rocket Racoon", "Yondu", "Nebula"],
				issue: "",
				search: "15"
			},
			{
				name: "Spider-man: Homecoming",
				heroes: ["Iron Man", "Spider-Man", "Vulture"],
				issue: "Amazing Spider-Man #2 comic",
				search: "16"
			},
			{
				name: "Thor: Ragnarok",
				heroes: ["Thor", "Loki", "Hulk", "Doctor Strange"],
				issue: "Planet Hulk",
				search: "17"
			},
			{
				name: "X-Men",
				heroes: ["Wolverine", "Xavier", "Magneto", "Jean Grey", "Cyclops", "Storm", "Rogue", "Sabretooth", "Toad", "Mystique"],
				issue: "The X-Men #1",
				search: "18"
			},
			{
				name: "X-Men 2",
				heroes: ["Wolverine", "Xavier", "Magneto", "Jean Grey", "Cyclops", "Storm", "Rogue", "Nightcrawwler", "Pyro", "Ice Man", "Lady Deathstrike", "Mystique"],
				issue: "X-Men: God Loves, Man Kills",
				search: "19"
			},
			{
				name: "X-Men: The Last Stand",
				heroes: ["Wolverine", "Xavier", "Magneto", "Jean Grey", "Cyclops", "Storm", "Rogue", "Nightcrawwler", "Pyro", "Ice Man", "Beast", "Juggernaut", "Shadowcat", "Colossus", "Angel", "Mystique", "Phoenix"],
				issue: "Astonishing X-Men Gifted",
				search: "20"
			},
			{
				name: "X-Men Origins: Wolverine",
				heroes: ["Wolverine", "Deadpool"],
				issue: "X-Men Origins Wolverine Comic #1",
				search: "21"
			},
			{
				name: "X-Men: First Class",
				heroes: ["Xavier", "Mystique", "Azazel", "Beast", "Magneto", "Riptide"],
				issue: "X-Men First Class #1 Comic",
				search: "22"
			},
			{
				name: "The Wolverine",
				heroes: ["Wolverine"],
				issue: "Wolverine Chris Claremont",
				search: "23"
			},
			{
				name: "X-Men: Days of Future Past",
				heroes: ["Wolverine", "Xavier", "Magneto", "Mystique", "Storm", "Rogue", "Beast", "Iceman", "Quicksilver", "Colossus", "Blink"],
				issue: "Uncanny X-Men #141",
				search: "24"
			},
			{
				name: "Deadpool",
				heroes: ["Deadpool", "Ajax", "Colossus"],
				issue: "The New Mutants #98",
				search: "25"
			},
			{
				name: "X-Men: Apocalypse",
				heroes: ["Xavier", "Magneto", "Mystique", "Beast", "Apocalypse", "Quicksilver", "Nightcrawler", "Storm", "Angel", "Havok", "Cyclops", "Wolverine"],
				issue: "X-Factor #6",
				search: "26"
			},
			{
				name: "Logan",
				heroes: ["Wolverine", "Laura", "Xavier", "Caliban"],
				issue: "Wolverine Old Man Logan",
				search: "27"

			}
		]

		var character = [
			{
				name: "Iron Man",
				issues: ["92", "1493", "1580", "1765", "3347", "3881", "4018", "4136", "4248", "4411"]
			}
		]

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


	    // On click event for the search button
		$("#searchMovie").on("click",function(event){

			event.preventDefault();


			var movieArray = []; 

			function errorModal(){
	    		if (movieArray.length <= 0) {
						$('#tipModal').modal('show');
					}
	    	}

			// Saves input into variable
			searchMovieInput = $("#movieNameId").val().toLowerCase().trim();
			console.log(searchMovieInput);

			if (searchMovieInput != ""){


				// Creates Div and puts inside variable
				var searchDiv = $('<div/>', {
					class: "panel panel-default",
					id: "resultsPanel"
				});


				// Writes created div to page on click function
				$('#searchContainer').html(searchDiv);

				// Divs for panel then appended to parent div above
				$('<div/>', {
					class: "panel-heading containerHeader",
					text: "Results",
					id: "resultsHeader"
				}).appendTo('#resultsPanel');
	
				$('<div/>', {
					class: "panel-body",
					id: "resultsBody"
				}).appendTo('#resultsPanel');

				// List to list the results
				$('<ul/>', {
					class: "panelList",
					id: "resultsList"
				}).appendTo('#resultsBody');
	
				// For each looping through movies to find possible matches from user search
				movieDatabase.forEach(function(movie) {
					var index = movie.name.toLowerCase().indexOf(searchMovieInput);
					if (index >= 0) {
						console.log(movie);
						movieArray.push(movie.name);


						$('<li/>', {
							class: "movieList",
							id: movie.search
						}).appendTo('#resultsList');



					// Creates buttons from matching movies and appends to created <ul>
						$('<input/>', {
							type: "submit",
							id: "searchButton",
							class: "movieButton",
							value: movie.name,
						}).appendTo('#'+movie.search);

	
					}

					else {
						console.log("movie not found")
  					}
				});
			}


			setTimeout(errorModal, 250);





			firebase.database().ref().on("child_added",function(snapshot){

						console.log(snapshot.val().searchMovieInput);

						//var nextTime = moment(firstTimeMoment.add(lapse)).format();
						//$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

			})


			

			firebase.database().ref().push({
				searchMovieInput: searchMovieInput,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			});

			$('form').trigger("reset");

		});

		// Key's to different API's utilized
		var tmdbKey = "53d8544b23ba9e4d06cd7620edc5f51f";
		var marvelKey = "0a862819d585cbff1cebe3a4a9caf6e8";
		var ebayKey = "";


		// On click function from movie buttons
		$(document).on("click", ".movieButton", function(event) {
			var that = this
			var search = "https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&language=en-US&query=" + this.value;

			// Removes instructional information
			$('#infoParag').hide();

			// Writes movie name to panel header
			$('#headerPanel').html(this.value);



			// Divs created to format panel
			$('<div/>', {
				class: "row",
				id: "infoRow1"
			}).appendTo('#movieInfo');

			$('<div/>', {
				class: "col-md-1",
				id: "infoExtra2"
			}).appendTo('#infoRow1');

			$('<div/>', {
				class: "col-md-5",
				id: "infoCol1"
			}).appendTo('#infoRow1');

			$('<div/>', {
				class: "row",
				id: "plotRow"
			}).appendTo('#infoCol1');

			$('<div/>', {
				class: "col-md-1",
				id: "infoExtra2"
			}).appendTo('#infoRow1');

			$('<div/>', {
				class: "col-md-5",
				id: "infoCol2"
			}).appendTo('#infoRow1');

			$('<div/>', {
				class: "row",
				id: "heroesRow"
			}).appendTo('#infoCol1');

			


			// ajax call to tmdb
			$.ajax({url: search, success: function(result) {
				console.log(result);

				// Info from ajax call to print to page
				var plot = result.results[0].overview;
				var poster = "http://image.tmdb.org/t/p/w185" + result.results[0].poster_path;
				var img = '<img id="moviePoster" src="'+poster+'"/>';

				$('#plotRow').html('<p id="plotHeader"><strong>Plot</strong></p><p>' + plot + '</p>');
				$('#infoCol2').html(img);


			}});

			movieDatabase.forEach(function(movie) {
				var index = movie.name.indexOf(that.value);
					if (index >= 0) {
						var heroList = $('<ul/>', {
							id: "infoList",
							class: "heroList"
						});

						$('#heroesRow').html(heroList)

						$('<li/>', {
							id: "listHeader",
							class: "heroesHeader",
							text: "Characters"
						}).appendTo('#infoList');


						for (i = 0; i < movie.heroes.length; i++) {
							$('<li/>', {
								id: "hero" + i,
								class: "heroes"
							}).appendTo('#infoList');

							$('<input/>', {
								type: "submit",
								id: "heroSearch",
								class: "heroSearch",
								value: movie.heroes[i],
								name: movie.heroes[i]
							}).appendTo('#hero' + i);
						}
					}
				});


		});

		// On click event for Character Buttons
		/* $(document).on("click", ".heroSearch", function(event) {
			var characterName = this.name;
			console.log(characterName);
			var search = "https://gateway.marvel.com:443/v1/public/characters?name=" + characterName + "&apikey=" + marvelKey;
			console.log(search);
			$('#listHeader').html(characterName + " Comics")


			$.ajax({url: search, success: function(result) {
				console.log(result);

				for (i=0; i < 10; i++) {
					console.log(result.data.results[0].comics.items[i]);

					var comicButtons = $('<input/>', {
						type: "submit",
						id: "heroComics",
						class: "comicButton",
						value: result.data.results[0].comics.items[i].name,
						name: result.data.results[0].comics.items[i].resourceURI
					});

					$('#hero' + i).html(comicButtons);
				}

			}});
		}); */

		$(document).on("click", ".heroSearch", function(event) {
			var characterName = this.name;

			character.forEach(function(hero) {
				var heroName = hero.name.indexOf(characterName);
				var name = [];
				if(heroName >= 0) {
					console.log(hero.issues);
					
					var comicList = $('<ul/>', {
						class: "panelList",
						id: "comicsList"
					});

					$('#heroesRow').html(comicList);


					for (i = 0; i < hero.issues.length; i++){
						var dynButton = "";
						var counter = 1;
						(function(i){
							setTimeout(function(){

								var search = "https://gateway.marvel.com:443/v1/public/comics/" + hero.issues[i] + "?apikey=" + marvelKey;
								console	.log(search);

								//$('<li/>', {
								//	id: "comic" + i,
								//	class: "heroes"
								//}).appendTo('#comicsList');

								$.ajax({url: search, success: function(result) {
									console.log(result.data.results[0].title);
									name.push(result.data.results[0].title);
									console.log(name[i])


									/*dynButton = $('<input/>', {
										type: "submit",
										id: "heroComics" + i,
										class: "comicButton",
										value: name[i]

									});*/
									//$('#comic' + i).append(dynButton);
								}});

								/*dynButton = $('<input/>', {
										type: "submit",
										id: "heroComics" + i,
										class: "comicButton",
										value: name[i]

								});*/

								//$('#comic' + i).append(dynButton);
								counter++;

								if (counter == hero.issues.length){

									function comicLoop(){
										for (k=0; k < hero.issues.length; k++){

											$('<li/>', {
												id: "comic" + k,
												class: "heroes"
											}).appendTo('#comicsList');

											dynButton = $('<input/>', {
											type: "submit",
											id: "heroComics" + k,
											class: "comicButton",
											value: name[k],
											name: "https://gateway.marvel.com:443/v1/public/comics/" + hero.issues[k] + "?apikey=" + marvelKey
										}).appendTo('#comic' + k);
										}
									}

									setTimeout(comicLoop, 500);
								}
							}, 250 * i);
						}(i));

						console.log(dynButton);
					}
				}
			});
		});

		$(document).on("click", ".comicButton", function(event) {
			var comic = this.name + "?apikey=" + marvelKey;
      		comic = comic.replace(/^http:\/\//i, 'https://');

      		$.ajax({url: comic, success: function(result) {
				console.log(result);

			}});

      		console.log(comic);
		})



		var top3Movies= [{term:"PZ", counter: 0}, {term:"PZ", counter: 0}, {term:"PZ", counter: 0}];
		//console.log(top3Movies.length);

		var maxCounter = 1;
		var maxTerm = top3Movies[0].term;

		//console.log(top3Movies.term + "top3Movies[q]="+  top3Movies.length);


		firebase.database().ref().on("child_added",function(snapshot){

			//top3Movies.push(snapshot.val().searchMovieInput);

			//console.log(snapshot.val().searchMovieInput);

			//console.log(top3Movies);

			var trendMovie= snapshot.val().searchMovieInput;


			var compareMovie = top3Movies[0].term;
			console.log(compareMovie + "hola"+ "flag = "+ flag +"top3Movies[q]="+ top3Movies.length);

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
			
			for (var i = 0; i < top3Movies.length;  i++) {
				if(top3Movies[i].counter > maxCounter){
					maxCounter = top3Movies[i].counter;
					maxTerm = top3Movies[i].term;
				}			
			}
			//console.log("contador"+ maxCounter + "maxterm"+ maxTerm);
			bubbleSort();
			//console.log( + top3Movies[top3Movies.length-2].term + top3Movies[top3Movies.length-3].term );

			var top1= top3Movies[top3Movies.length-1].term.toUpperCase();
			var top2= top3Movies[top3Movies.length-2].term.toUpperCase();
			var top3= top3Movies[top3Movies.length-3].term.toUpperCase();			


			$("#topMovie1").html("<div>" + "Top 1: <strong>"+ top1 + "</strong></div>");
			$("#topMovie2").html("<div>" + "Top 2: <strong>"+ top2 + "</strong></div>");			
			//$("#topMovie3").html("<div>" + "Top 2: <strong>"+ top3 + "</strong></div>");
		});


		function bubbleSort(){
			var end = top3Movies.length - 1;

			for(i=0; i<end; i++){
				if (top3Movies[i].counter > top3Movies[i+1].counter ){
					var temp = top3Movies[i];
					top3Movies[i] = top3Movies[i+1];
					top3Movies[i+1] = temp;
				}
			}
		}		


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