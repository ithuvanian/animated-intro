var frame2light = '#4297bc', frame2med = '#3983a3', frame2dark = '#306e89';

var para0 = '<b>Share this:</b> Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss avail. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.';
var para1 = '<b>Schedule:</b> He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure six. Smiling cousins warrant law explain for whether.';
var para2 = '<b>Clubs:</b> Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had.';
var para3 = '<b>Games:</b> Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.';
var para4 = '<b>Travel:</b> Was drawing natural effort respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of.';
var para5 = '<b>Weather:</b> Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. My feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.';

function blocksIn() {
    $('.block1').delay(700).fadeIn(500);
    $('.block2').delay(900).fadeIn(500);
    $('.block3').delay(1100).fadeIn(500);
    $('.block4').delay(1300).fadeIn(500);
    $('.block5').delay(1500).fadeIn(500);
}

function assignImage(block, pic, para) {
  block.on('click', function() {
    $('.icon img').attr('src', pic);
    $('.description').html(para);
  });
}

assignImage( $('.frame2 > p'), 'img/share.png', para0 );
assignImage( $('.block1'), 'img/alarm.png', para1 );
assignImage( $('.block2'), 'img/clubs.png', para2 );
assignImage( $('.block3'), 'img/gamepad.png', para3 );
assignImage( $('.block4'), 'img/paperairplane.png', para4 );
assignImage( $('.block5'), 'img/storm.png', para5 );

$(window).load(function() {
}); //end load

$(document).ready(function() {
  $('.frame, .frame1 > p, .dots').hide();
  $('.frame1').show();
  $('.overlay').fadeOut();
  $('.frame1 > p, .dots').delay(300).fadeIn(500);

  $('.frame1').on('click', function() {
    $(this).fadeOut();
    $('body').css('background', frame2light);
    $('.block').hide();
    $('.frame1').fadeOut();
    $('.frame2').delay(400).fadeIn(500);
    blocksIn();
  }); //end click

  $(".frame2 > p").hover(
    function() {
      $('.frame2').css('background', frame2med);
    },
    function() {
      $('.frame2').css('background', frame2light);
    }); //end hover


  $('.frame2 > p, .block').on('click', function() {
    $('.frame2 > p').fadeOut();
    $('body').css('background', '#c88021');
    $('.circle').hide();
    $('.frame2').fadeOut();
    $('.frame3').delay(400).fadeIn();
    $('.more').delay(500).fadeIn(900);
    $('.contact').delay(700).fadeIn(900);
    $('.reset').delay(900).fadeIn(900);
    $('.circle').hover(
      function() {
        $(this).css('background', '#ac4d0f');
        $('.circle').not($(this)).fadeOut(200);
      },
      function() {
        $(this).css('background', '#ad6f1c');
        $('.circle').not($(this)).fadeIn();
      }
    ); //end hover
  }); //end click

  $('.more').on('click', function() {
    $('body').css('background', frame2light);
    $('.block').hide();
    $('.frame3').fadeOut();
    $('.frame2, .frame2 p').delay(400).fadeIn(500);
    blocksIn();
  }); //end click

  $('.reset').on('click', function() {
    location.reload();
  }); //end click

}); //end ready
