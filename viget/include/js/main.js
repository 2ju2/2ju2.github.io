/********** ����󽽶��̵� �Լ����� **********/
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

//������ â�� ���������� �̹���, Wrap���� ũ�⸦ ������
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


<!-- ����󽽶��̵� �̵� Script -->
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

//������ â�� �������� �������� �̹���, Wrap���� ũ�⸦ ������
$(window).resize(function(e) {
	imgWidth=$visualShow.width();
	$images.css("width",imgWidth);
	imgHeight=$images.height();
	$visualWrap.css("height", imgHeight);
	$visualList.css("width",imgWidth*imgNum);	
});				



/********** �����̹��������� ���� **********/

//�Լ� ����
$(function(){
	$(".imgbox_list li").onSize();
});
			
//�Լ� ����
$.fn.onSize = function(){
	return this.each(function(){
	
	var $obj = $(this);
	var $boxBtn = $obj.find(".box_btn");
	var $boxTxt = $obj.find(".box_txt");
	
		$obj.on("mouseover",onLarge);
		$obj.on("mouseleave",onSmall);
		
		// ���콺 ������ �̹��� Ȯ��
		function onLarge(){
			$obj.animate({"background-size":"133%"},300,"easeOutCubic");
			$boxTxt.animate({"top":"55%"},300,"easeOutCubic");
			$boxBtn.animate({"bottom":"55px"},300,"easeOutCubic");
		};
		
		//���콺 ����� �̹��� ���
		function onSmall(){
			$obj.animate({"background-size":"130%"},300,"easeOutCubic");
			$boxTxt.animate({"top":"56%"},300,"easeOutCubic");
			$boxBtn.animate({"bottom":"50px"},300,"easeOutCubic"); 
		};						
	});
};		