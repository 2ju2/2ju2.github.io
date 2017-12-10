/***** Common JS *****/

$(document).ready(function(){

	//pc menu
	var $pc_menu = $('.pc_menu > ul > li');
	$pc_menu.each(function(index){
		$(this).on({
			'mouseenter focusin': navi_onOver,
			'mouseleave focusout': navi_onOut
		});
	});

	//mobile menu 
	var $mb_opener = $('.mb_menu_btn');
	var $mb_header = $('.mb_header');
	var $mb_back = $('.mb_back');

	//좌우오픈
	$mb_opener.on('click', function(e){
		e.preventDefault();

		$mb_opener.parent('.mb_header').toggleClass('open');
		if($mb_header.hasClass('open') == false){
			$('.m_menu').stop().animate({'left' : '-100%'}, 300);
			$mb_back.fadeOut(200);
		}else{
			$('.m_menu').stop().animate({'left' : '0'}, 300);
			$mb_back.fadeIn(200);
		}
	});

	//세로오픈
	$('.m_menu_list li').each(function(index){
		$(this).on('click', function(){ 
			event.stopPropagation();

			if($(this).find('ul').hasClass('on')){			//클릭한 li의 하위메뉴 ul이 열려있는 경우		
				
				//console.log($(this).find('> a').text() + '클릭');
				$(this).find('> ul').removeClass('on');
				$(this).find('> ul').slideUp(200);

			}else{												//클릭한 li의 하위메뉴 ul이 닫혀있는경우

				//console.log($(this).find('> a').text() + 'click');
				$('.m_menu_list ul').not($(this).parents('.m_menu_list ul')).removeClass('on');
				$('.m_menu_list li').not($(this).parents('.m_menu_list li')).removeClass('on');
				$('.m_menu_list ul').not($(this).parents('.m_menu_list ul')).slideUp(200);
				$(this).find('> ul').addClass('on');
				$(this).addClass('on');
				$(this).find('> ul').slideDown(200);

			}
		})
	})
});

	var slideWid;
	var imgWid; 
	var listWid;
	var imgCnt;
	var dotIdx;
	var transWid;
	var timer;

$(window).load(function(){
	//ul 사이즈변경
	var slideWid = $('.slide').width();
	var imgWid = $('.slide_list li').width();
	var listWid = $('.slide_list').width();
	var imgCnt = $('.slide_list li').size();

	imgWid = slideWid;
	$('.slide_show').width(imgWid);
	$('.slide_list li').width(imgWid);
	$('.slide_list').width(imgWid * imgCnt);
	
	$('.dot_list li').on('click', onDotClick);
	timer=setInterval(onSlidePlay,3000);
	$('.slide').on('mouseenter', slide_onStop);
	$('.slide').on('mouseleave', slide_onStart);
});

$(window).resize(function(){
	var slideWid = $('.slide').width();
	var imgWid = $('.slide_list li').width();
	var listWid = $('.slide_list').width();
	var imgCnt = $('.slide_list li').size();

	//ul 사이즈변경
	imgWid = slideWid;
	$('.slide_show').width(imgWid);
	$('.slide_list li').width(imgWid);
	$('.slide_list').width(imgWid * imgCnt);
	
	//슬라이드 일시중단 + 위치수정 + 슬라이드 재시작
	slide_onStop();
	dotIdx = $('.dot_list li').index($('.dot_list li.on'));
	transWid = dotIdx * imgWid;
	$('.slide_list').css({'margin-left' : -transWid})
	slide_onStart();
});

	function onDotClick(){ //도트 클릭시 슬라이드
		imgWid = $('.slide_list li').width();
		dotIdx = $('.dot_list li').index($(this));
		transWid = dotIdx * imgWid;
		
		$('.dot_list li').removeClass('on');
		$(this).addClass('on');
		$('.slide_list li').removeClass('on');
		$('.slide_list li').eq(dotIdx).addClass('on');
		$('.slide_list').animate({'margin-left' : -transWid}, 300)
	};

	function onSlidePlay(){
		//li.on이 li중 3번째 이하에 있는 경우
		maxCnt = $('.slide_list li').size() - 1;
		if($('.dot_list li.on').index() == maxCnt){ 
			$('.dot_list li').eq(0).trigger('click');
		}else{
			$('.dot_list li.on').next('li').trigger('click');
		};
	};

	function slide_onStop(){
		clearInterval(timer);
	};

	function slide_onStart(){
		timer=setInterval(onSlidePlay,2000);
	};
	



function navi_onOver(){
	$('.pc_menu > ul > li').removeClass('active');
	$(this).addClass('active');
	$('.subDepth').hide();
	$(this).find('.subDepth:not(:animated)').slideDown(200, function(){
		$(this).addClass('show_menu');
	});
};
function navi_onOut(){
	$(this).removeClass('active');
	$('.subDepth:not(:animated)').slideUp(200, function(){
		$('.subDepth').hide();
	});
};



