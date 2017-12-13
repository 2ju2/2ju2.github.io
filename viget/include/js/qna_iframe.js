/* iframe 사이즈에 맞춰 컨텐츠 자동수정 */
$(document).ready(function() {			
	var lastHeight = 0;
	var curHeight = 0;
	var targetFrame = $('#iff'); // custome id 입력
	
	$( "#iff" ).on('load', function() { 
		curHeight = targetFrame.contents().find('body').height();
		targetFrame.css('height', curHeight + 'px' );
	});
	
	setInterval(function(){
		curHeight = targetFrame.contents().find('body').height();
		if ( curHeight != lastHeight ) {
		  targetFrame.css('height', (lastHeight = curHeight) + 'px' );
		}
	  },500);	
});