$(document).ready(function(){
	$(".panel-heading").click(function(e) {
		e.preventDefault();
		var me = $(this).find("i.fa-chevron-circle-up, i.fa-chevron-circle-down");
		if(me.hasClass("fa-chevron-circle-down")){
			me.removeClass("fa-chevron-circle-down");
			me.addClass("fa-chevron-circle-up");
		}
		else{
			me.removeClass("fa-chevron-circle-up");
			me.addClass("fa-chevron-circle-down");
		}
		me.parent().siblings(".panel-body").slideToggle();
	});
});