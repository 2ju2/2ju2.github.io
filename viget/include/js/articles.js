/* Articles tab Panel */
var $tab;
var $panel;

$(document).ready(function(e) {
	$tab = $(".tab_list>li>a")
	$panel = $(".panel_list>li");
	
	$panel.hide();
	$("#tab1").show();
	$tab.on("click", onShow);
});

function onShow(){
	$tab.removeClass("current");
	$(this).addClass("current");
	$panel.hide();
	$($(this).attr("href")).show();
	return false;
};