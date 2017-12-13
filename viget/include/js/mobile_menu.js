/* 모바일 메뉴 animate */
$(document).ready(function(e) {
	$("#m_menu_open").on("click",onMobile);
	$("#m_menu_close").on("click",onMobileClose);
});

function onMobile(){
	$(".m_mainmenu").css("display","block");
	$(".m_mainmenu").animate({"left":"0px"},500,"easeOutCubic");
};

function onMobileClose(){
	$(".m_mainmenu").animate({"left":"100%"},500,"easeOutCubic",function(){
	$(".m_mainmenu").css("display","none");
	});
};