var quote, author;

$("#generate").click(function(){
  $.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", '6zc8VGkISCmshHBGJckjSvnEe2kkp1Nr8NYjsn3NBOG9mEgj4k');
    },
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    success: function(result) {
      quote = result.quote;
      author = result.author;
      $("#quote").html('"' + quote+'"');
      $("#author").html("-"  + author);
    }
  });
});