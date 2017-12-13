/********** 비쥬얼슬라이드 함수실행 **********/
var $visualWrap;
var $visualShow;
var $visualList;
var $visualImg;
var imgWidth;
var imgHeight;
var imgNum;
var currentPosition;

$(window).load(function(){

$visualWrap=$(".main_visual_wrap");
$visualShow=$(".visual_show");
$visualList=$(".visual_list");
$images=$(".visual_list li img");
imgNum=$images.size();

//윈도우 창이 열렸을때의 이미지, Wrap등의 크기를 정해줌
imgWidth=$visualShow.width();
$images.css("width",imgWidth);
imgHeight=$images.height();
$visualWrap.css("height", imgHeight);

$visualList.css("width",imgWidth*imgNum);

$visualWrap.on("mouseover",onArrowS);
$visualWrap.on("mouseleave",onArrowE);
$("#next_btn").on("click",onNext);

});

<!-- Arrow START/END Script -->
function onArrowS(){
	$("#next_btn:not(:animated)").animate({"right":"0px"},100,"easeOutCubic");
};	
function onArrowE(){
	$("#next_btn:not(:animated)").animate({"right":"-10%"},100,"easeOutCubic");
};								


<!-- 비쥬얼슬라이드 이동 Script -->
function onNext(){
	currentPosition=parseInt($visualList.css("left"));
	if(-currentPosition<$visualList.width()-imgWidth*2){
		$visualList.animate({"left":currentPosition-imgWidth},300,"easeOutCubic");
		$("#next_btn a svg").removeClass("leftArrow");
	}else if(-currentPosition==$visualList.width()-imgWidth*2){
		$visualList.animate({"left":currentPosition-imgWidth},300,"easeOutCubic");
		$("#next_btn a svg").addClass("leftArrow");	
	}
	else{
		$visualList.animate({"left":"0"},300,"easeOutCubic");
		$("#next_btn a svg").removeClass("leftArrow");
	}
};

//윈도우 창이 리사이즈 됐을때의 이미지, Wrap등의 크기를 정해줌
$(window).resize(function(e) {
	imgWidth=$visualShow.width();
	$images.css("width",imgWidth);
	imgHeight=$images.height();
	$visualWrap.css("height", imgHeight);
	$visualList.css("width",imgWidth*imgNum);	
});				



/********** 메인이미지사이즈 수정 **********/

//함수 실행
$(function(){
	$(".imgbox_list li").onSize();
});
			
//함수 선언
$.fn.onSize = function(){
	return this.each(function(){
	
	var $obj = $(this);
	var $boxBtn = $obj.find(".box_btn");
	var $boxTxt = $obj.find(".box_txt");
	
		$obj.on("mouseover",onLarge);
		$obj.on("mouseleave",onSmall);
		
		// 마우스 오버시 이미지 확대
		function onLarge(){
			$obj.animate({"background-size":"133%"},300,"easeOutCubic");
			$boxTxt.animate({"top":"55%"},300,"easeOutCubic");
			$boxBtn.animate({"bottom":"55px"},300,"easeOutCubic");
		};
		
		//마우스 리브시 이미지 축소
		function onSmall(){
			$obj.animate({"background-size":"130%"},300,"easeOutCubic");
			$boxTxt.animate({"top":"56%"},300,"easeOutCubic");
			$boxBtn.animate({"bottom":"50px"},300,"easeOutCubic"); 
		};						
	});
};		