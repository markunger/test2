$(document).ready(function() {

// jQuery Function Number #1 (.hide())
$(".pic-title-text").hide();

// jQuery Function Number #2 (.hover())
// jQuery Function Number #3 (.css())
// jQuery Function Number #4 (.fadeIn())
// jQuery Function Number #5 (.fadeOut())
$(".button-pic").hover(function(){
		$(this).find(".pic-title-text").fadeIn();
		$(this).find(".pic-title-text").css("top", "-20%");
	},
	function(){
		$(this).find(".pic-title-text").css("top", "10%");
		$(this).find(".pic-title-text").fadeOut();
	});

// jQuery Function Number #6 (.click())
// jQuery Function Number #7 (.removeClass())
// jQuery Function Number #8 (.addClass())
// jQuery Function Number #9 (.attr())
$(".button-pic").click(function(){
		$(".content").removeClass("content").addClass("hidecontent");
		var picked=$(this).attr('id');
		var pickedshort=picked.replace("-pic","")
		$("#"+pickedshort).removeClass("hidecontent").addClass("content");
		
	});

});