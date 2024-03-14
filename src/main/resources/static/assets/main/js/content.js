$(function() {
    
    
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});
    
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

    
    load_row();
    
});

function load_row(){
    var row = '';
    
    if(list){
        if(list['question'] != undefined){
            
            $('#bo_title').text(list['question']);
            $('#bo_content').text(list['answer']);
            $('#content_title_en').text('FAQ');
            $('#content_title_kr').text('자주 묻는 질문');
            $('#rtn_page').attr('href', '/homepage/faq');
            
        }else if(list == 'guide1'){
            
            $('#content_title_en').text('GUIDE');
            $('#content_title_kr').text('딜버 배달대행 프로그램');
            $('#bo_title').text('딜버 배달대행 프로그램 - 상점용 ');
            $('#bo_content').text('POS, PC, 핸드폰접수, 어떤 포스 프로그램을 쓰고 있더라도 100% 원터치 연동이 가능합니다. 자체 개발한 원터치 연동은 강력한 기능을 제공 합니다. 전화 주문시 CID 기능으로 고객관리를 하실 수 있으며 수동 입력 시 다양한 편의기능을 제공합니다. 주문금액에 따른 고객/상점 배달비 부담 여부도 실시간으로 확인하실 수 있으며 다양한 해상도를 반응형으로 지원합니다. 딜버 배달대행 프로그램에 기사용, 관리자용도 초보부터 베테랑까지 다양하게 편리한 기능을 갖추고 있습니다.');
            
			$('#img_tag').removeClass('hide');
			$('#content_img').attr('src', '/homepage/get_img/profit.jpg');
			
            $('#video_tag').html('<iframe class="custom_video" src="https://www.youtube.com/embed/Nj8wLgpellY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            $('#video_tag').removeClass('hide');
            $('#rtn_page').attr('href', '/');
            
        }else if(list == 'guide2'){
            
            $('#content_title_en').text('GUIDE');
            $('#content_title_kr').text('딜버 맛집 플랫폼 - 이용자');
            $('#bo_title').text('딜버 맛집 플랫폼');
            $('#bo_content').text('기존에 배달 플랫폼에 없던 음식점만 등록하여 고객님들에게 배달 서비스를 제공하는 플랫폼 입니다. 다양한 정보, 진짜 블로그 후기, 포인트, 쿠폰등 다양한 방식 지원합니다. 실거리요금제로 합리적으로 이용할 수 있으며 기타 생활심부름 까지 한번에~ 간단하게 이용 가능합니다.딜버 이용자 플랫폼으로 스마트한 생활 서비스를 누려보세요. 향후 오프라인 샵 (도장, 열쇠, 펫샵, 마트)의 제휴를 통해 배달이 어려웠던 물품들도 즉시 배송가능 하게 됩니다.');
            
			$('#img_tag').removeClass('hide');
			$('#content_img').attr('src', '/homepage/get_img/profit.jpg');
			
            $('#video_tag').html('<iframe class="custom_video" src="https://www.youtube.com/embed/__T66hUdx74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            $('#video_tag').removeClass('hide');
            $('#rtn_page').attr('href', '/');
        }else{
            
            $('#bo_title').text(list['title']);
            $('#bo_content').text(list['content']);
            $('#content_title_en').text('NOTICE');
            $('#content_title_kr').text('공지사항');
            
            $('#bo_date').text(list['date']);
        }
        
        
    }
    
    $('.main_board').html(row);
}