<!doctype html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
		<title>[viget]juhee 페이지</title>
		<link rel="stylesheet" href="/common/css/init.css" type="text/css">
		<link rel="stylesheet" href="/juhee/include/css/style.css" type="text/css">
		<link rel="stylesheet" href="/juhee/include/css/reset.css" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>	
        
        <!-- 메인 컨텐츠 마우스 오버/리브 이벤트 -->
		<script type="text/javascript">
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
		
	</script>
	</head>
	<body>
	<!-- 헤더영역 -->
	<? include_once("include/header.html") ?>    
        
    <div class="main">
    	<!-- 비쥬얼 -->
        <section class="main_visual_wrap">
			<div class="visual_show">
        		<ul class="visual_list bxslider">
            		<li>
                        <img src="https://static.viget.com/work/_2000xAUTO_crop_center-center/WCS-Hero.jpg?mtime=20160301134849" alt="gorilla">
                        <p class="visual_title">A Bold Stand<br>for Wildlife</p>
                        <p class="visual_eye"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"><path d="M15 5.774c-2.8 0-5.078 2.343-5.078 5.225s2.278 5.226 5.078 5.226c2.801 0 5.078-2.344 5.078-5.226s-2.277-5.225-5.078-5.225zm0 8.761c-1.885 0-3.418-1.587-3.418-3.536s1.533-3.535 3.418-3.535c.218 0 .431.026.638.067-.608.302-1.033.937-1.033 1.676 0 1.029.817 1.867 1.821 1.867.836 0 1.533-.584 1.746-1.372.156.402.246.838.246 1.297 0 1.949-1.533 3.536-3.418 3.536zm14.439-3.756c-2.986-6.036-8.517-9.787-14.439-9.787-5.921 0-11.453 3.751-14.438 9.787-.068.139-.068.302 0 .44 2.985 6.037 8.517 9.789 14.438 9.789 5.922 0 11.453-3.752 14.439-9.788.069-.139.069-.302 0-.441zm-14.439 8.241c-4.866 0-9.431-3.066-11.958-8.02 2.527-4.954 7.092-8.021 11.958-8.021 4.867 0 9.432 3.067 11.959 8.021-2.527 4.953-7.092 8.02-11.959 8.02z"></path></svg></p>
                        <p class="visual_link">WILDLIFE CONSERVATION SOCIETY <spna>WCS.ORG<span/></p>                  
                	</li>
                    <li>
                    	<img src="https://static.viget.com/_2000xAUTO_crop_center-center/dsg-wmsfit-home-hero.jpg?mtime=20160301114407" alt="fight">
                        <p class="visual_title">Strong Is the<br>New Skinny</p>
                        <p class="visual_eye"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"><path d="M15 5.774c-2.8 0-5.078 2.343-5.078 5.225s2.278 5.226 5.078 5.226c2.801 0 5.078-2.344 5.078-5.226s-2.277-5.225-5.078-5.225zm0 8.761c-1.885 0-3.418-1.587-3.418-3.536s1.533-3.535 3.418-3.535c.218 0 .431.026.638.067-.608.302-1.033.937-1.033 1.676 0 1.029.817 1.867 1.821 1.867.836 0 1.533-.584 1.746-1.372.156.402.246.838.246 1.297 0 1.949-1.533 3.536-3.418 3.536zm14.439-3.756c-2.986-6.036-8.517-9.787-14.439-9.787-5.921 0-11.453 3.751-14.438 9.787-.068.139-.068.302 0 .44 2.985 6.037 8.517 9.789 14.438 9.789 5.922 0 11.453-3.752 14.439-9.788.069-.139.069-.302 0-.441zm-14.439 8.241c-4.866 0-9.431-3.066-11.958-8.02 2.527-4.954 7.092-8.021 11.958-8.021 4.867 0 9.432 3.067 11.959 8.021-2.527 4.953-7.092 8.02-11.959 8.02z"></path></svg></p>
                        <p class="visual_link">Dick's Sporting Goods<spna>Women's Fitness<span/></p>   
                    </li>
                    <li>
                    	<img src="https://static.viget.com/_2000xAUTO_crop_center-center/derbynbc2.jpg?mtime=20160507181525" alt="flower">
                        <p class="visual_title">A Bold Stand<br>for Wildlife</p>
                        <p class="visual_eye"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"><path d="M15 5.774c-2.8 0-5.078 2.343-5.078 5.225s2.278 5.226 5.078 5.226c2.801 0 5.078-2.344 5.078-5.226s-2.277-5.225-5.078-5.225zm0 8.761c-1.885 0-3.418-1.587-3.418-3.536s1.533-3.535 3.418-3.535c.218 0 .431.026.638.067-.608.302-1.033.937-1.033 1.676 0 1.029.817 1.867 1.821 1.867.836 0 1.533-.584 1.746-1.372.156.402.246.838.246 1.297 0 1.949-1.533 3.536-3.418 3.536zm14.439-3.756c-2.986-6.036-8.517-9.787-14.439-9.787-5.921 0-11.453 3.751-14.438 9.787-.068.139-.068.302 0 .44 2.985 6.037 8.517 9.789 14.438 9.789 5.922 0 11.453-3.752 14.439-9.788.069-.139.069-.302 0-.441zm-14.439 8.241c-4.866 0-9.431-3.066-11.958-8.02 2.527-4.954 7.092-8.021 11.958-8.021 4.867 0 9.432 3.067 11.959 8.021-2.527 4.953-7.092 8.02-11.959 8.02z"></path></svg></p>
                        <p class="visual_link">NBC Sports<spna>Kentucky Derby Social Brooch<span/></p>   
                    </li>
                    <li>
                    	<img src="https://static.viget.com/work/_2000xAUTO_crop_center-center/politico-homepage-carousel-grid-050316.png?mtime=20160503224712" alt="vote">
                        <p class="visual_title">Enter the<br>Political Arena</p>
                        <p class="visual_eye"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"><path d="M15 5.774c-2.8 0-5.078 2.343-5.078 5.225s2.278 5.226 5.078 5.226c2.801 0 5.078-2.344 5.078-5.226s-2.277-5.225-5.078-5.225zm0 8.761c-1.885 0-3.418-1.587-3.418-3.536s1.533-3.535 3.418-3.535c.218 0 .431.026.638.067-.608.302-1.033.937-1.033 1.676 0 1.029.817 1.867 1.821 1.867.836 0 1.533-.584 1.746-1.372.156.402.246.838.246 1.297 0 1.949-1.533 3.536-3.418 3.536zm14.439-3.756c-2.986-6.036-8.517-9.787-14.439-9.787-5.921 0-11.453 3.751-14.438 9.787-.068.139-.068.302 0 .44 2.985 6.037 8.517 9.789 14.438 9.789 5.922 0 11.453-3.752 14.439-9.788.069-.139.069-.302 0-.441zm-14.439 8.241c-4.866 0-9.431-3.066-11.958-8.02 2.527-4.954 7.092-8.021 11.958-8.021 4.867 0 9.432 3.067 11.959 8.021-2.527 4.953-7.092 8.02-11.959 8.02z"></path></svg></p>
                        <p class="visual_link">Politico <spna>2016 Election Coverage<span/></p>   
                    </li>
            	</ul>
                <span id="next_btn"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" ><path d="M13.66 0l-1.389 1.414 5.487 5.586h-17.276v2h17.275l-5.486 5.586 1.389 1.414 7.857-8-7.857-8z"></path></svg></a></span>
			</div>         
        </section>
    	
        <!-- 어바웃 -->        
		<section class="main_about">
        	<h2>About Viget</h2>
            <article class="about_wrap">
                <div class="top_box">viget is</div>
                <div class="txt_wrap">
                    <p class="title">Insights +<br>Delivery</p>
                    <p class="txt"><span class="strong">We are</span> <a href="#" class="dotted_link" alt="67 people">67 people</a> in <a href="#" class="dotted_link" alt="3 offices">3 offices</a> with a 16-year history of making award-winning> digital <a href="#" class="dotted_link" alt="products">products</a>, <a href="#" class="dotted_link" alt="exeperiences">experiences</a>, and <a href="#" class="dotted_link" alt="tools">tools</a> that inspire customers, extend capabilities, and advance business. Happily independent since 1999.
                    </p>
                </div>
                <div class="btn_wrap"><button class="bottom_btn">what we offer<span>→</span></button></div> 
        	</article>                 
        </section>
        
        <!-- 컨텐츠 -->
        <section class="main_cont">
        	<h2>Featured Articles</h2>
            <article>
 	        	<div class="cont_wrap">
                    <ul class="imgbox_list">
                        <li class="img_box" id="box_01">
                            <a href="#" class="box_ver1">
                                <div class="box_win">
                                    <img src="https://static.viget.com/blog/_284x284_crop_center-center/amanda-post-circle.jpg?mtime=20160610095237"><br>
                                </div>
                                <div class="box_wave"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#white-waves"></use></svg></div>
                                <span class="box_txt">E3 2016: Launching the Official Quake Champions and Dishonored 2 Sites</span>
                            </a>
                        </li>
                        <li class="img_box" id="box_02">
                            <a href="#" class="box_ver1"><span class="box_btn">RUNNING TRAINER</span><span class="under_line"></span></a>
                        </li>
                        <li class="img_box" id="box_03">
                            <a href="#" class="box_ver1">
                                <div class="box_win">
                                    <img src="https://static.viget.com/_284x284_crop_center-center/pasted_image_at_2016_03_10_11_40_am.png?mtime=20160310115817"><br>
                                </div>
                                <div class="box_wave"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#white-waves"></use></svg></div>
                                <span class="box_txt">Going Off-the-Shelf: WordPress vs. Craft vs. Drupal vs. Shopify</span>
                            </a>
                        </li>
                        <li class="img_box" id="box_04"><a href="#" class="box_ver1"></a></li>
                        <li class="img_box_ver2" id="box_05">
                            <a href="#" class="box_ver2">
                                <div class="box_win">
                                    <img src="https://static.viget.com/_284x284_crop_center-center/react-logo-wide.png?mtime=20160411121644"><br>
                                </div>
                                <div class="box_wave"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#white-waves"></use></svg></div>
                                <span class="box_txt">Want to learn React Native? Start here.</span>
                            </a>
                        </li>
                        <li class="img_box_ver2" id="box_06"><a href="#" class="box_ver2"><span class="box_btn">RUNNING TRAINER</span><span class="under_line"></span></a></li>
                        <li class="img_box_ver2" id="box_07"><a href="#" class="box_ver2"><span class="box_btn">RUNNING TRAINER</span><span class="under_line"></span></a></li>
                        <li class="img_box_ver3" id="box_08"><a href="#" class="box_ver3"></a></li>
                        <li class="img_box_ver3" id="box_09"><a href="#" class="box_ver3"><span class="box_btn">RUNNING TRAINER</span><span class="under_line"></span></a></li>
                        <li class="img_box_ver3" id="box_10">
                            <a href="#" class="box_ver3">
                                <div class="box_win">
                                    <img src="https://static.viget.com/_284x284_crop_center-center/Sticky-Notes.jpg?mtime=20160325094942"><br>
                                </div>
                                <div class="box_wave"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#white-waves"></use></svg></div>
                                <span class="box_txt">5 Ways to Save Time During Research</span>                    
                            </a>
                        </li>
                        <li class="img_box_ver3" id="box_11">
                            <a href="#" class="box_ver3">
                                <div class="box_win">
                                    <img src="https://static.viget.com/_284x284_crop_center-center/Untitled-design-1.jpg?mtime=20160311133819"><br>
                                </div>
                                <div class="box_wave"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#white-waves"></use></svg></div>
                                <span class="box_txt">Why Redesign Your Website and How to Prep</span>
                            </a>
                        </li>
                    </ul>
            	</div>
                <div class="btn_wrap">
                    <button class="bottom_btn">VIEW OUR WORK<span>→</span></button>
                    <button class="bottom_btn">READ OUR ARTICLES<span>→</span></button>
                </div>           
            </article>
        </section>
	</div>        

	<!-- 푸터영역 -->
	<? include_once("include/footer.html") ?>    
	
</body>

</html>
