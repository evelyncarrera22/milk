$( "#More" ).click(function() {
 for ( var i=0; i<100; i++){
  $( "body" ).append('<img src="http://i.imgur.com/GPRGZBB.png"></img>');
}
});

$("#milk").click(function()  {
  for ( var i=100; i>1; i--){
    $("img").remove();
  }
});
