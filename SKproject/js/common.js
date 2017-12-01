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



