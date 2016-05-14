$ (document).ready(function(){
  var box1Answer = 2012;
  var box2Answer = 2013;
  var box3Answer = 2014;
  var box4Answer = 2015;
  var yes1 = false;
  var yes2 = false;
  var yes3 = false;
  var yes4 = false;

$("input[name='box1']").change(function(){
  if($(this).val() != box1Answer){
    $('.area1').addClass('warning');
    $('.area1').removeClass('success');
    yes1 = false;
  }
  else if ($(this).val() == box1Answer) {
    $('.area1').addClass('success');
    $('.area1').removeClass('warning');
    yes1 = true;
  }
  else if($(this).val().length < 0) {
    $('.area1').removeClass('success');
    $('.area1').removeClass('warning');
    yes1 = false;
  }
  });

  $("input[name='box2']").change(function(){
    if($(this).val() != box2Answer){
      $('.area2').addClass('warning');
      $('.area2').removeClass('success');
      yes2 = false;
    }
    else if ($(this).val() == box2Answer) {
      $('.area2').addClass('success');
      $('.area2').removeClass('warning');
      yes2 = true;

    }
    else if($(this).val().length < 0) {
      $('.area2').removeClass('success');
      $('.area2').removeClass('warning');
      yes2 = false;
    }
    });

    $("input[name='box3']").change(function(){
      if($(this).val() != box3Answer){
        $('.area3').addClass('warning');
        $('.area3').removeClass('success');
        yes3 = false;

      }
      else if ($(this).val() == box3Answer) {
        $('.area3').addClass('success');
        $('.area3').removeClass('warning');
        yes3 = true;

      }
      else if($(this).val().length < 0) {
        $('.area3').removeClass('success');
        $('.area3').removeClass('warning');
        yes3 = false;

      }
      });

      $("input[name='box4']").change(function(){
        if($(this).val() != box4Answer){
          $('.area4').addClass('warning');
          $('.area4').removeClass('success');
          yes4 = false;

        }
        else if ($(this).val() == box4Answer) {
          $('.area4').addClass('success');
          $('.area4').removeClass('warning');
          yes4 = true;

        }
        else if($(this).val().length < 0) {
          $('.area4').removeClass('success');
          $('.area4').removeClass('warning');
          yes4 = false;

        }
        });

        $("#btnSubmit").click(function(){
          if(yes1==false||yes2==false||yes3==false||yes4==false){
                alert("FAILED TO LAUNCH");
              }
          else if (yes1==true&&yes2==true&&yes3&&true||yes4==true) {
            window.open("https://youtu.be/OnoNITE-CLc?t=1m31s");
          }
            });

            (function() {

                var quotes = $(".quotes");
                var quoteIndex = -1;

                function showNextQuote() {
                    ++quoteIndex;
                    quotes.eq(quoteIndex % quotes.length)
                        .fadeIn(2000)
                        .delay(2000)
                        .fadeOut(2000, showNextQuote);
                }

                showNextQuote();

            })();

            


});
