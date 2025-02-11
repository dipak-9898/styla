

$('.sh').click(function(){
  $('.sh').css({display:"none"})
$('.search-hide').fadeIn()

});
$('.header-hide input').click(function(){
  $('.header-popup').fadeIn()
  $('#hide').fadeIn()

});
$("#hide").click(function(){
  $('.header-popup').fadeOut()
  $('#hide').fadeOut()

});

// Show the first tab and hide the rest
$('.popup-tabing ul li:first-child, .middle-tab ul li:first-child').addClass('active');
$('.tab-content').hide();
$('.first-tab:first-child').show();

// Click function
$('.popup-tabing ul li, .middle-tab ul li').click(function(){
  $('.popup-tabing ul li,.middle-tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.first-tab').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// Show the first tab and hide the rest
$('.middle-top-btn ul li:first-child').addClass('active');
$('.tabcontent-1').hide();
$('.tabcontent-1:first').show();

// Click function
$('.middle-top-btn ul li').click(function(){
  $('.middle-top-btn ul li').removeClass('active');
  $(this).addClass('active');
  $('.tabcontent-1').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});





// click hide and show 
$(document).ready(function(){

  $(".read-more").click(function(){
    $(".second-section").toggle();
  });

 $(".header-right-top a").click(function(){
    $(".notification-down").fadeIn();
  });
});







$(function() {
  $('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 5,
    lineCap: 'round', //Can be butt
    barColor: '#ffcd35',
    trackColor: "#ddd",
    size: 250,
    rotate: 0,    
    animate: 4000,

    onStep: function(value) {
  this.$el.find('span').text(Math.round(value));
},
onStop: function(value, to) {
  this.$el.find('span').text(Math.round(to));
}
    
  });
});

$('.open').click(function(){
  $('.heder-right-menu').animate({right:"0"})

});
$('.close').click(function(){
  $('.heder-right-menu').animate({right:"-100%"})

});


$('.pie-table .pie-i').click(function(){
  $(this).parents('.pie-bg .pie-padding').addClass('flip')

});
$('.pie-full .close').click(function(){
  $(this).parents('.pie-bg .pie-padding').removeClass('flip')
})

$(document).mouseup(function (e)
                    {
  var container = $(".notification-down"); // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.hide();
  }
});





// Click function
// Show the first tab and hide the rest
$('.post-tabing ul li:first-child').addClass('active');
$('.tab-content-22').hide();
$('.tab-content-22:first-child').show();

// Click function
$('.post-tabing ul li').click(function(){
  $('.post-tabing ul li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-22').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

// Show the first tab and hide the rest


$('.middle-top-right a').click(function(){
  $('.post-hide').show()

});
$('.post-btn a').click(function(){
  $('.post-hide').hide()

});
$('.popup-tabing li:first-child').addClass('active');
$('.post-tab .tab-content').hide();
$('.post-tab .tab-content:first-child').show();


$('.click').click(function(){
  $('.search-hide').fadeIn()

});




// Show the first tab and hide the rest
$('.popup-tabing ul li:first-child').addClass('active');
$('.tab-content-12').hide();
$('.tab-content-12:first').show();

// Click function
$('.popup-tabing ul li').click(function(){
  $('.popup-tabing ul li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-12').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$('.ss-left').click(function(){
  $('.s-left').animate({"left":"0"});
  $('.s-logo').addClass('left')
  $('body').addClass('full')

});
$('.ss-right').click(function(){
  $('.s-left').animate({"left":"-300px"});
  $('.s-logo').removeClass('left')
  $('body').removeClass('full')

});



















