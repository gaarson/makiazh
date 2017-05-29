
  $("#navigator").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
            top = $(id).offset().top;
          $('body,html').animate({scrollTop: $(this.hash).offset().top - 50}, 700);
        });
  $(function shorting_news () {
    nShort = $(".text-news")
    nShort.each(function (shortme) {
        $(this).replaceWith("<p id='short-id"+shortme+"' class='text-news shortme'>" + $(this).text().substr(0,460) + "&hellip;</p>");
    });
  });
