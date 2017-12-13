/* OUR WORK ¸®½ºÆ® animate */
$(function(){
	$(".work_list li").onV();
});

$.fn.onV = function(){ 
	return this.each(function(){ 
		
		var $obj = $(this);
		var $underTxt = $obj.find(".under_txt");
		var $underWhite = $obj.find(".work_txt");
		var $workcolor = $obj.find(".work_color");
		
		$obj.on("mouseover",onUp);
		$obj.on("mouseleave",onDown);
		
		function onUp(){
			$underTxt.stop();
			$underWhite.stop();
			$workcolor.stop(); 
			$underTxt.animate({"bottom":"50px"},300,"easeOutCubic");
			$underWhite.animate({"bottom":"-100px"},300,"easeOutCubic");
			$workcolor.animate({"background-color":"rgba(0,0,0,0)"},300,"easeOutCubic")					
		};	

		function onDown(){
			$underTxt.stop();
			$underWhite.stop();
			$workcolor.stop(); 
			$underTxt.animate({"bottom":"-50px"},300,"easeOutCubic");
			$underWhite.animate({"bottom":"0px"},300,"easeOutCubic");
			$workcolor.animate({"background-color":"rgba(0,0,0,0.2)"},300,"easeOutCubic")
		};
	});
};