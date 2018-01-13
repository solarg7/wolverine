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