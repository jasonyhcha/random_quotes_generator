var quote, author, current_color, current_quote, random_index, light_colors, dark_colors, colors, favorites, click_disabled;

favorites = [];
click_disabled = false;

colors = ["#986830", "#29346b", "#277435", "#d8b386", "#9a2f32", "#ffff00", "#ffc0cb", "#008b81", "#ece8d1", "#eee7a5", "#d89863"];

function color_change() {
  random_index = Math.floor((Math.random() * colors.length));
  while (current_color == colors[random_index]) {
    random_index = Math.floor((Math.random() * colors.length));
  }
  current_color = colors[random_index];
  $("body").animate({
    backgroundColor: current_color
  }, {
    duration: 1500,
    queue: false
  });
};

$("body").click(function(evt) {
  if (click_disabled)
    return;
  if ($(evt.target).closest('#heart').length)
    return;
  $.ajax({
    beforeSend: function(request) {
      request.setRequestHeader("X-Mashape-Key", '6zc8VGkISCmshHBGJckjSvnEe2kkp1Nr8NYjsn3NBOG9mEgj4k');
    },
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    success: function(result) {

      quote = result.quote;
      author = result.author;
      current_quote = {
        quote: quote,
        author: author
      };
      $("#content").fadeTo(500, 0, function() {
        $("#quote").html('"' + quote + '"');
        $("#author").html("-" + author);
        $("#heart span").switchClass("glyphicon-heart", "glyphicon-heart-empty", 500);
        $("#content").fadeTo(750, 1, function() {});
      });
    }
  });
  color_change();
  click_disabled = true;
  setTimeout(function() {
    click_disabled = false;
  }, 1200);
});

$("#heart").click(function() {
  if (favorites.length === 0) {
    $("#list").animate({
      "margin-top": "+=40"
    });
  }

  if ($.inArray(current_quote, favorites) === -1) {
    favorites.push(current_quote);
    console.log("test");
    console.log(favorites);
    $("#heart span").switchClass("glyphicon-heart-empty", "glyphicon-heart", 500);
    $("#list .badge").html(favorites.length);
  }
});

$("#list").click(function() {

});

$(document).ready(function() {
  $("body").trigger("click");
});