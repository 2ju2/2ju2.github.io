/* iframe ����� ���� ������ �ڵ����� */
$(document).ready(function() {			
	var lastHeight = 0;
	var curHeight = 0;
	var targetFrame = $('#iff'); // custome id �Է�
	
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