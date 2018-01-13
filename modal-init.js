(function(){
  var $content = $('#modal-tip').detach();   // Remove modal from page

  $('#tip').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());