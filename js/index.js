var parsed;

$("#generate").click(function(){
  $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/", function(a) {
    $("#quote").append(a.quote);
  });
})