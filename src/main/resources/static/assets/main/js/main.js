var settings = {
    
	banner: {
		// Indicators (= the clickable dots at the bottom).
			indicators: true,

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of "#banner > article".
			speed: 50,

		// Transition delay (in ms)
			delay: 5000,

		// Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
			parallax: 0.25
	}

};

$(function() {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	/**
	 * Custom banner slider for Slate.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._slider(options);

			return $this;

		}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [], indicators = [],
				$indicators,
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Turn off indicators if we only have one slide.
			if ($slides.length == 1)
				options.indicators = false;

		// Functions.
			$this._switchTo = function(x, stop) {

				if (isLocked || pos == x)
					return;

				isLocked = true;

				if (stop)
					window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('top');

					if (options.indicators)
						indicators[lastPos].removeClass('visible');

				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

					if (options.indicators)
						indicators[pos].addClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						//window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;

						//}, 100);

					}, options.speed);

			};

		// Indicators.
			if (options.indicators)
				$indicators = $('<ul class="indicators"></ul>').appendTo($this);

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this),
						$img = $slide.find('img');

					// Slide.
						$slide
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));

					// Add to slides.
						slides.push($slide);

					// Indicators.
						if (options.indicators) {

							var $indicator_li = $('<li>' + i + '</li>').appendTo($indicators);

							// Indicator.
								$indicator_li
									.data('index', i)
									.on('click', function() {
										$this._switchTo($(this).data('index'), true);
									});

							// Add to indicators.
								indicators.push($indicator_li);

						}

					i++;

				})
				._parallax(options.parallax);

		// Initial slide.
			slides[pos].addClass('visible').addClass('top');

			if (options.indicators)
				indicators[pos].addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {

				current++;

				if (current >= slides.length)
					current = 0;

				$this._switchTo(current);

			}, options.delay);

	};

	

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header'),
			$banner 	= $('.banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			//$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			//});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner.
			$banner._slider(settings.banner);

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});

			}

	
    
    
    load_board();
    load_map();
    
    $('.information_btn').click(function(){

        var idx = $(this).index('.information_btn');
        var img = $('.information_img').eq(idx).attr('src');
        var title = $('.about_item_title').eq(idx).text();
        var content = $('.about_item_content').eq(idx).text();

        $('#information_show_img').attr('src',img);
        $('#show_title').text(title);
        $('#show_content').text(content);
        $('#information_show_tag').show( "slide", {direction: "down" }, 300 );
        
        var offset = $('#main').offset();
        $('html, body').animate({scrollTop : offset.top}, 100);

    });
    $('.guide_btn').click(function(){
        var idx = $(this).index('.information_btn');
        var img = $('.information_img').eq(idx).attr('src');
        var title = $('.about_item_title').eq(idx).text();
        var content = $('.about_item_content').eq(idx).text();

        
        //$('#show_title').text(title);
        //$('#show_content').text(content);
        //$('#guide_show_tag').show( "slide", {direction: "down" }, 300 );
        
        //var offset = $('#main').offset();
        //$('html, body').animate({scrollTop : offset.top}, 100);
    });
    
    $('#join_btn').click(function(){
        $('#join_tag').toggleClass('hide');
    });
    
    $('#empty_app').click(function(){
        alert('관리자만 사용가능합니다.'); 
    });
    
    $('.menual_list').click(function(){
        alert('준비 중입니다.');
    });
    
    $('.inquiry_btn').click(function(){
        
        var el = $(this);
        var idx = el.index('.inquiry_btn');
        var txt = '';
        var data_txt = '';
        
        if(idx == 0){
            
            txt = '상점 이름';
            data_txt = 'shop';
        }else if(idx == 1){
            
            txt = '업체명';
            data_txt = 'alliance';
        }else{
            
            txt = '기사명';
            data_txt = 'rider';
        }
        
        $('.inquiry_btn').removeClass('active');
        el.addClass('active');
        $('#type').val(data_txt);
        $('#name').attr('placeholder', txt);
    });
});

function load_board(){
    var brow = '';
    var frow = '';
    var b = 0;
    
    if(board){
        var cnt = board.length;
        
        for(b; b<cnt; b++){
            brow += '<li class="mb_item"><a href="/homepage/board_content/'+board[b]['idx']+'"><span class="main_bo_title">'+board[b]['title']+'</span></a></li>';
        }
    }
    
    if(faq){
        b = 0;
        var cnt = faq.length;
        
        for(b; b<cnt; b++){
            frow += '<li class="mb_item"><a href="/homepage/faq_content/'+faq[b]['idx']+'"><span class="main_bo_title">'+faq[b]['question']+'</span></a></li>';
        }
    }
    
    $('.main_board').eq(0).html(brow);
    $('.main_board').eq(1).html(frow);
    
}
function load_map(){
    
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var latlng = new daum.maps.LatLng(35.1623185 , 129.1876348);
    var mapOption = {
        center: latlng, // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
        mapTypeId : daum.maps.MapTypeId.ROADMAP // 지도종류
    }; 

     // 지도를 생성한다 
    var map = new daum.maps.Map(mapContainer, mapOption); 

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new daum.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);	

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new daum.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    // 지도 확대 레벨 변화 이벤트를 등록한다
    daum.maps.event.addListener(map, 'zoom_changed', function () {
        //console.log('3' + map.getLevel() +'5');
    });
    // 지도에 마커를 생성하고 표시한다
    var marker = new daum.maps.Marker({
        position: latlng, // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });

}
