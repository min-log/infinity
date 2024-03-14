
console.log("시작 ")
var now = new Date();
var year = now.getFullYear(); // 연도
var month = now.getMonth()+1; // 월
var day = now.getDate(); // 일

var stDate = new Date(2022, 07, 27);
var endDate = new Date(year, month, day);

var btMs = endDate.getTime() - stDate.getTime() ;
var btDay = btMs / (1000*60*60*24) ; //일수 차이

var plusAmount = Math.random() * (80000 - 70000) + 70000;

/*--- 메인-숫자로보는 딜버 : 숫자카운트 시작 ----*/
var amount_list = [40494853+(btDay * plusAmount), 24422, 22203, 224];
var is_amount_run = false;

/*-wrap-- 롤링배너 시작 ----*/
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;
var cardSlidePop = '';
var cardSlide = '';

/*--- 메인인지 구분 ----*/

/*--- 비디오 로딩 ----*/

var video_src = [ //영상번호 배열
    'cvV7xv5tSGg',

    'jPeq-SwW4zY',

    'CxYMvEbmoSI',

    'yFY1rbNIgHg',

    'jQAdgow55Gg',

    'UFvNCX8A3EU',

    'rXN-eYQeX7U'
];
/*var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
    if(trident != null && trident[1] >= "6.0"){
        alert('IE10 이상 입니다.');

    } else{
        alert('IE9 이하 입니다.');
        alert(trident);
    }*/




for(i = 2003; i >= 1950; i--){
    $('#rider_birth_tx1').append('<option value="' + i + '년' + '">' + i + '년' + '</option>');
}
for(i = 1; i <= 12; i++){
    $('#rider_birth_tx2').append('<option value="' + i + '월' + '">' + i + '월' + '</option>');
}
for(i = 1; i <= 31; i++){
    $('#rider_birth_tx3').append('<option value="' + i + '일' + '">' + i + '일' + '</option>');
}





$(document).ready(function(){

    $(".go_top").on('click', function(){
        $("html, body").stop().animate({scrollTop:0},300);

        return false;
    });
    $(".banner_close").on('click', function(){
        $(".banner").addClass('hide');

        return false;
    });

    /*$(".banner").mouseenter(
        $(".banner_hide_tx").removeClass('hide');
    ).mouseleave(
        $(".banner_hide_tx").addClass('hide');
    );*/


    $('#open_menu').on('click', function(){
        $('#side').addClass('on');
        $('body').addClass('non_scroll');
    });
     $('#close_menu').on('click', function(){
        $('#side').removeClass('on');
        $('body').removeClass('non_scroll');
    });
    
    /*--- sec01 비디오슬라이드 ----*/
    videoSlide = new Swiper("#video_slide", {
        effect : "fade",
        loop : true,
        //direction: "vertical",
        speed : 0,
       /* navigation: {
          nextEl: ".card_slide_btnR",
          prevEl: ".card_slide_btnL"
        },*/
        //allowTouchMove: true,
        //breakpointsInverse: true,
        breakpoints: {
            1000: { //999까지 모바일 1000부터 pc
                allowTouchMove: false
            }
        },
        pagination : {
            el : ".video_slide_pager",
            clickable : true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
            //return '<span class="' + className + '">' + (index + 1) + '화' + "</span>";
          },
        }
        
        /*on : {
            init : function(){
                $("#card_popup_slide .now").text(this.activeIndex);
                $("#card_popup_slide .total").text(this.slides.length-2);
                //console.log(this.slides.length);
            },
            slideChange : function(){
                //console.log(this.realIndex);
                $("#card_popup_slide .now").text(this.realIndex+1);

            }

        }*/
    });
   
    
    
    //비디오 버튼 클릭시 로딩
    
    $('.video_slide_pager').on('click', 'span', function(){
        var seq = $(this).index('span');
        var sec01_video = $('.sec01_video');
        
        //비디오 정지
        
        var iframe = $(".swiper-slide-active").find('.sec01_video').get(0).contentWindow;
        iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
        
        if( sec01_video.eq(seq+1).attr('src') == '' ){
            sec01_video.eq(seq+1).attr('src', 'https://www.youtube.com/embed/' + video_src[seq] + '?enablejsapi=1&autoplay=1&mute=1&controls=1&modestbranding=1&modestbranding=1&rel=0&loop=1&playlist=' + video_src[seq] );
        }
        
    });


    //개인정보처리방침 팝업
    $('.view_law').on('click', 'span', function(){
        $('.popup_wrap').addClass('popup_show');
        $('.personal_popup').removeClass('hide');
        $('body').addClass('non_scroll');
    });


    //카드슬라이드 팝업 열고 닫기
    $('.card_slide').on('click', 'li', function(){
        //console.log($(this).index('.card_slide li'));
        
        $('.popup_wrap').addClass('popup_show');
        $('.card_popup').removeClass('hide');
        $('body').addClass('non_scroll');
        
        /*--- 카드슬라이드 팝업 ----*/
        cardSlidePop = new Swiper("#card_popup_slide", {
            effect : "fade",
            loop : true,
            /*loopedSlides: 1,
            loopAdditionalSlides: 1,*/
            speed : 400,
            navigation: {
              nextEl: ".card_slide_btnR",
              prevEl: ".card_slide_btnL"
            },
            allowTouchMove: true,
            breakpointsInverse: true,
            breakpoints: {
                1000: { //999까지 모바일 1000부터 pc
                    allowTouchMove: false
                }
            },
            /*pagination : {
                el : "#main-slide .pager",
                clickable : true
            },*/
            // 기본 옵션값 이외의 이벤트를 작성하고 싶을 때
            on : {
                init : function(){
                    $("#card_popup_slide .now").text(this.activeIndex);
                    $("#card_popup_slide .total").text(this.slides.length-2);
                    //console.log(this.slides.length);
                },
                slideChange : function(){
                    //console.log(this.realIndex);
                    $("#card_popup_slide .now").text(this.realIndex+1);

                }

            }
        });
        
        
        cardSlidePop.slideTo($(this).index('.card_slide li')-5 , 0);
        console.log($(this).index('.card_slide li'));
    });

    //팝업 닫기버튼으로 닫기
    $('.pop_close').on('click', function(){
        $('.popup_wrap').removeClass('popup_show');
        $('.popup').addClass('hide');
        $('body').removeClass('non_scroll');

        //new Swiper('#card_popup_slide');
        cardSlidePop.destroy();
    });

    //팝업 배경눌러서 닫기
    $('.popup_wrap').on('click', function(e){

        var el = $(this);
        if(e.target.classList.contains('popup_wrap')) {
            $('.popup_wrap').removeClass('popup_show');
            $('.popup').addClass('hide');
            $('body').removeClass('non_scroll');

            //new Swiper('#card_popup_slide');
            cardSlidePop.destroy();
        }

    });



    /*--- 서브-탭 클릭이벤트 시작 ----*/
    $('.tab_scroll>p').on('click', function(){
        
        var scrollPosition = $($(this).attr("data-target")).offset().top - 120;
        
        $("html, body").animate({
            scrollTop: scrollPosition
        }, 500);
        
        //$('html, body').animate({scrollTop: $(this.hash).offset.top }, 300);
        
    });
    
    
    /*//헤더 마우스오버
    var scrt = $(window).scrollTop();
    
    $('#header').mouseenter(function(){
        $("#header").addClass("scr");
    });
    
    $('#header').mouseleave(function(){
        if(scrt == 0){
           $("#header").removeClass("scr");
           }
    });*/
    
    /*--- 스크롤이벤트 시작 ----*/
    $(window).on('scroll', function(){
        
        var sct = $(window).scrollTop();
        
        if ($(window).scrollTop() > 420) {
            $(".go_top").addClass("on");
            $(".banner").addClass("on");

        } else {
            $(".go_top").removeClass("on");
            $(".banner").removeClass("on");
        }
        

            
            // 헤더 스크롤
            if(sct >= 87) {
                $("#header").addClass("scr");
            } else {
                $("#header").removeClass("scr");
                
            }
            
            // sec01 배경효과
            if(sct >= 487) {
                $(".sec01_bg").addClass("on");
            } else {
                $(".sec01_bg").removeClass("on");
                
            }
            

        
        // 서브-탭 스크롤
        if($('.subp_tab_wrap').length > 0){ //서브탭이 존재할때 실행
            
            var tabTop = $(".subp_tab_wrap").offset().top - 84;
            
            if(sct >= tabTop) {
                $(".subp_tab_wrap").addClass("fix");
            } else {
                $(".subp_tab_wrap").removeClass("fix");
            }
            
            if($('#introduce_page').length > 0){ 
                var introTop1 = $("#intro_area_1").offset().top - 280;
                var introTop2 = $("#intro_area_2").offset().top - 280;
                var introTop3 = $("#intro_area_3").offset().top - 280;
                
                if(sct >= introTop1) {
                    $('.intro_tab').removeClass('on');
                    $("#intro_tab_1").addClass("on");
                    
                } 
                if(sct >= introTop2){
                    $('.intro_tab').removeClass('on');
                    $("#intro_tab_2").addClass("on");
                    
                }
                if(sct >= introTop3){
                    $('.intro_tab').removeClass('on');
                    $("#intro_tab_3").addClass("on");
                }
                
            }
            
            if($('#policy_page').length > 0){ 
                var policyTop1 = $("#policy_area_1").offset().top - 280;
                var policyTop2 = $("#policy_area_2").offset().top - 280;
                var policyTop3 = $("#policy_area_3").offset().top - 280;
                var policyTop4 = $("#policy_area_4").offset().top - 280;
                
                if(sct >= policyTop1) {
                    $('.policy_tab').removeClass('on');
                    $('#policy_tab_1').addClass('on');
                    
                }
                if(sct >= policyTop2){
                    $('.policy_tab').removeClass('on');
                    $("#policy_tab_2").addClass("on");
                    
                }
                if(sct >= policyTop3){
                    $('.policy_tab').removeClass('on');
                    $("#policy_tab_3").addClass("on");
                    
                }
                if(sct >= policyTop4){
                    $('.policy_tab').removeClass('on');
                    $("#policy_tab_4").addClass("on");
                }
                
            }
            
        }//서브-탭 스크롤 끝
        
        
        
        
        
        
        
    }); 
    /*--- 스크롤이벤트 끝 ----*/




        /*--- 메인-숫자로보는 딜버 : 숫자카운트 시작 ----*/
        $(window).on('scroll', function () {
            var s = $(window).scrollTop();
            var secTop = $(".sec04").offset().top - 400;

            if (s > secTop && is_amount_run == false) {
                amount_count();
                is_amount_run = true;
            }

        });
        /*--- 메인-숫자로보는 딜버 : 숫자카운트 ----*/


        /*--- 롤링배너 시작 ----*/
        //가로로 나열
        $("#flow li").each(function () {
            $(this).css("left", banner_left);
            banner_left += $(this).width() + 15;
            $(this).attr("id", "content" + (++img_cnt));
        });

        last = img_cnt;
        startFlow();


        //호버시 정지
        $("#flow li").hover(
            function () {
                stopFlow();
            },
            function () {
                startFlow();
            }
        );
        /*--- 롤링배너 끝 ----*/




    /*--- 문의하기 탭 ----*/
    $(".inquiry_tab li").on('click',function(){
        var tab_id = $(this).attr('data-tab');
        
        $(".inquiry_tab li").removeClass('selected');
        $(".form_wrap").removeClass('view');
        
        $(this).addClass('selected');
        $('#'+tab_id).addClass('view');

        //$(".sido").html('<option value="" selected>시/도</option>');
        // $(".sigugun").html('<option value="" selected>시/구/군</option>');
        // $(".dong").html('<option value="" selected>읍/면/동</option>');

    });
    
    
    
    /*--- 메인- 사운드버튼 ----*/
    $('#sound_btn').on('click', function(){
        var el = $(this);
        var cls = el[0].classList[0];
        
        el.toggleClass('on');

        if(cls == 'on'){
            console.log(1);
            $('#main_video').prop('muted',true);
           } else{
            $('#main_video').prop('muted',false);
           }
    });

    //unmute();








    default_setup();

});//document.ready

/*--- 페이지 로딩시 자동실행 ----*/
function default_setup(){

    /*--- 헤더 스크롤이벤트 시작 ----*/
    var sct = $(window).scrollTop();
    
    if ($(window).scrollTop() > 120) {
            $(".go_top").addClass("on");
            
        } else {
            $(".go_top").removeClass("on");
        } 
    

        if(sct >= 87) {
            $("#header").addClass("scr");
        } else {
            $("#header").removeClass("scr");
        }
        
        //*--- sec01 비디오 ----*/
        $('.sec01_video').eq(1).attr('src', 'https://www.youtube.com/embed/' + video_src[0] + '?enablejsapi=1&autoplay=1&mute=1&controls=1&modestbranding=1&modestbranding=1&rel=0&loop=1&playlist=' + video_src[0] );

    
        

    
    
    
    
     /*--- 카드슬라이드 ----*/
    cardSlide = new Swiper("#card_slide", {
       
        slidesPerView: "auto",
        loop : true,
        speed : 400,
        navigation: {
          nextEl: "#card_slide_btn"
        },
        allowTouchMove: true,
        breakpointsInverse: true,
        breakpoints: {
            1000: { //999까지 모바일, 1000부터 pc, pc일때의 설정
                allowTouchMove: true
            }
        },
        /*pagination : {
            el : "#main-slide .pager",
            clickable : true
        },*/
        // 기본 옵션값 이외의 이벤트를 작성하고 싶을 때
        on : {
            init : function(){
                $(".card_now").text(1); //.text(this.activeIndex);
                $(".card_total").text(this.slides.length/3);
                $(".card_tt").html($('.card_in_txt').eq(this.activeIndex).html()); //html로 쓰면 텍스트 뿐만 아니라 안의 태그까지 가져와짐
                $(".card_tx").html($('.card_hide_tx ').eq(this.activeIndex).html());
                //console.log(this.slides.length);
            },
            slideChange : function(){
                //console.log(this.realIndex);
                $(".card_now").text(this.realIndex+1);
                $(".card_tt").html($('.card_in_txt').eq(this.activeIndex).html());
                $(".card_tx").html($('.card_hide_tx ').eq(this.activeIndex).html());
                //console.log(this.activeIndex);
                //console.log(this.find(".card_in_txt"));
                

            }

        }
    });
        
    //cardSlidePop.slideTo($(this).index('.card_slide li')+1 , 0);
    
    /*var sct = $(window).scrollTop();
    var tabTop = $(".subp_tab_wrap").offset().top - 84;
    
    if(sct >= tabTop) {
        $(".subp_tab_wrap").addClass("fix");
    } else {
        $(".subp_tab_wrap").removeClass("fix");
    }*/
    
}




/*--- 메인-숫자로보는 딜버 : 숫자카운트 시작 ----*/
function amount_count(){

    $(".amount").each(function(index, item){

       $(this).prop('counter', 0).animate({
           counter:  amount_list[index]/*.replace(/,/g, "")*/ //콤마 지움 
       }, {
           duration: 1000,
           easing: 'swing',
           step: function(now){
               $(this).text(Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); //콤마넣기
           }
           /*complete: function() {
                console.log('a');
           }*/
       });

    });
}


/*--- 롤링배너 시작 ----*/
function startFlow(){
    interval = setInterval(function(){
      $("#flow li").each(function(){
          $(this).css("left", $(this).position().left-1);
      });
    
        var first_content = $("#content"+first);
        var last_content = $("#content"+last);
        
        if(first_content.position().left < "-"+$(first_content).width()){
            first_content.css("left", last_content.position().left + last_content.width()+15);
            first++;
            last++;
            
            if(last > img_cnt) {
                last = 1;
            }
            if(first > img_cnt) {
                first = 1;
            }
        }
        
    }, 15);
}

function stopFlow(){
    clearInterval(interval);
}

/**/
var leftItem = document.getElementById('ani_logo');
//var middleItem = document.getElementById('ani_logo');







(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");


})();
window.addEventListener("optimizedScroll", function(){
  
  leftItem.style.transform = "translateX(-" + window.pageYOffset/2 + "px)";
  //middleItem.style.transform = "translateX(" + window.pageYOffset/4 + "px)";
})



var swiper = new Swiper(".proSwiper", {
    direction: "vertical",
    pagination: {
        el: ".pro-swiper-pagination",
        clickable: true,
    },
});