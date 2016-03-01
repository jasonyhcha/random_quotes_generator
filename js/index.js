var quote, author, current_color,random_index, 
    colors = ["#FAEBD7","#01263B","#d2e0c5","#FFD700","#778899","#6B8E23","#008080", "#800000","#CC99A2","#470047"];


function color_change(){
  random_index = Math.floor((Math.random() * 10));
  while(current_color == colors[random_index]){
    random_index = Math.floor((Math.random() * 10));
  }
  current_color = colors[random_index];
  console.log(random_index);
  $("body").animate({backgroundColor:current_color},1500);
};

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
      $("#content").fadeTo("slow",0,function(){
        $("#quote").html('"' + quote+'"');
        $("#author").html("-"  + author);
        $("#content").fadeTo("slow",1,function(){});
      });
    }
  });
  color_change();
});

$(document).ready(function(){
  $("#generate").trigger("click");
});