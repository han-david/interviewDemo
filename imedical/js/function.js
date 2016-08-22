$(document).ready(function() {


    /******************QQ客服*************************/


    $("#callSun").click(function() {
        document.getElementById("qq_frame").src = "http://wpa.qq.com/msgrd?v=3&uin=1379558294&site=qq&menu=yes";
    })

    $("#callTing").click(function() {
        document.getElementById("qq_frame").src = "http://wpa.qq.com/msgrd?v=3&uin=976994550&site=qq&menu=yes";
    })


    /******************图片轮播*************************/

    var i = 0; //第i张图片
    var inter //图片滚动定时器
    var size = $(".banner .imgs li").size();
    $(".banner .imgs li").first().addClass("on");

    bannerPlay(); //轮播开始

    /*自动轮播*/
    function bannerPlay() {
        inter = setInterval(function() {
            i++;
            move()
        }, 5000);
    }


    /*向左的按钮*/
    $(".banner .btn_l").click(function() {
        i--;
        move();
        window.clearInterval(inter);
        bannerPlay();
    })



    /*向右的按钮*/
    $(".banner .btn_r").click(function() {
        i++;
        move();
        window.clearInterval(inter);
        bannerPlay();
    })



    function move() {

        if (i == size) {
            i = 0;
            $(".banner  .imgs li").eq(i).animate({ opacity: 1 }, 1000).siblings().animate({ opacity: 0 }, 1500);
        } else if (i == -1) {
            i = size;
            $(".banner  .imgs li").eq(i).animate({ opacity: 1 }, 1000).siblings().animate({ opacity: 0 }, 1500);
        } else {
            $(".banner  .imgs li").eq(i).animate({ opacity: 1 }, 1000).siblings().animate({ opacity: 0 }, 1500);
        }
    }



    /******************响应式侧边栏*************************/

    $(".menu").click(function() {
        $(".sideNav").show();
    })


    $(".return").click(function() {
        $(".sideNav").hide();
    })



    /******************文章切换*************************/
    $(".tabTable .tabBtn").first().addClass("on");

    $(".tabTable .tabBtn").click(function() {

        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".article article").eq(index).addClass("on").siblings().removeClass("on");
    })


    /******************回到顶部*************************/

    $('.to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    //scroll to top
    $('.to-top').hide();  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    $('.to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

})
