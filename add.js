window.onload = rotate;

var adImages = ["dundas.jpg", "osgood.jpg", "hall.jpg"];
var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd === adImages.length) {
		thisAd = 0;
	}
	document.getElementById("rotate").src = adImages[thisAd];
	setTimeout("rotate()", 5000);
}

$(function(){
$("section").click(function(){
        $("section").toggleClass('moved');
    });
});

var title = document.getElementById('title');
function testScroll(ev){
    if(window.pageYOffset>400){
    $("nav").slideUp();
}
    else{
     $("nav").slideDown();
    };
    
};

window.onscroll=testScroll

 $(function() {
    $( ".button" ).click(function() {
      $( "body" ).toggleClass( "clicked");
    });
  });

var mq = window.matchMedia( "(min-width: 500px)" );

if (mq.matches) {
 
$('.preview').hover(function() {
    $(this).css("box-shadow","none"
               );
    $(this).animate({
        width: "220px",
        height: "170px"
    }, 'slow');

/*}, function() {
    $(this).css("box-shadow","5px 5px 20px 5px #828A95"
               );
    $(this).animate({
         width: "200px",
        height: "150px"
    }, 'slow');*/

});
    
    
} else {
 
    $('.preview').hover(function() {
    $(this).css("border","solid"
               );
    $(this).animate({
        width: "170px",
        height: "120px"
    }, 'slow');

}, function() {
    $(this).animate({
         width: "150px",
        height: "100px"
    }, 'slow');

});
    
}
