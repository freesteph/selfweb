
$(document).ready(function() {
    currentleft = $("div.boxcontent").position().left;
    $("div#menu a").each(function(index, element) {
	$(element).click(function(event) {
	    if(($("div.boxcontent").position().left - currentleft) == -index * 960) {
		return;
	    }
	    $("div#menu a").removeClass("selected");
	    $(element).addClass("selected");
	    $("div.boxcontent").animate({left:-index*960}, 1000);
	    $("div.controldesc").animate({top:-index*51}, 500);
	});
    });
});