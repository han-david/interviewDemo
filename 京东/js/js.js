
// 左上角地址选择
$('.head-left').mouseenter(function(){
	$('.location').css('display','block');
	$('.head-left .shade').css('display','block');
	$(this).addClass('active');
})
$('.head-left').mouseleave(function(){
	$('.location').css('display','none');
	$('.head-left .shade').css('display','none');
	$(this).removeClass('active');
})
$('.location ul li a').click(function(){
	$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	$('.head-left span:first-child').html($(this).html());
})

//我的京东
$('.cw-icon1').eq(3).hover(function(){
	$('.myJD').css('display','block');
	$(this).find('.shade').css('display','block');
	$(this).addClass('active');
},function(){
	$('.myJD').css('display','none');
	$(this).find('.shade').css('display','none');
	$(this).removeClass('active');
})

//手机京东
$('.cw-icon2').hover(function(){
	$('.phone').css('color','#c81623');
	$('.mobileJD').css('display','block');
	$(this).find('.shade').css('display','block');
	$(this).addClass('active');
},function(){
	$('.phone').css('color','#666');
	$('.mobileJD').css('display','none');
	$(this).find('.shade').css('display','none');
	$(this).removeClass('active');
})

//关注京东
$('.cw-icon1').eq(2).hover(function(){
	$('.focusJD').css('display','block');
	$(this).find('.shade').css('display','block');
	$(this).addClass('active');
},function(){
	$('.focusJD').css('display','none');
	$(this).find('.shade').css('display','none');
	$(this).removeClass('active');
})

//客户服务
$('.cw-icon1').eq(1).hover(function(){
	$('.sevice').css('display','block');
	$(this).find('.shade').css('display','block');
	$(this).addClass('active');
},function(){
	$('.sevice').css('display','none');
	$(this).find('.shade').css('display','none');
	$(this).removeClass('active');
})

//网站导航
$('.cw-icon1').eq(0).hover(function(){
	$('.navigation').css('display','block');
	$(this).find('.shade').css('display','block');
	$(this).addClass('active');
},function(){
	$('.navigation').css('display','none');
	$(this).find('.shade').css('display','none');
	$(this).removeClass('active');
})

//活动取消按钮
$('.quit').click(function(){
	$(this).parent().parent().fadeOut();
})

//购物车部分
$('.shoppingcar').hover(function(){
	$('.goods').css('display','block');
	$(this).find('.shade1').css('display','block');
	$(this).addClass('active');
},function(){
	$('.goods').css('display','none');
	$(this).find('.shade1').css('display','none');
	$(this).removeClass('active');
})

//banner图部分
$(".img-list img:first").show();
var m = 0;
var timer = setInterval(imagePlay, 3000);

function imagePlay(){
	m++;
	if (m > 5) {
		m = 0;
	}

	controlImage(m);
	controlIcon(m);

}
function imageBack(){
	m=m-1;
	if(m<0){
		m=5;
	}
	controlImage(m);
	controlIcon(m);

}

function controlImage(n){
	$(".img-list img").finish().fadeTo(500, 0.3).hide().eq(n).show().fadeTo(500, 1);
}

function controlIcon(n){
	$(".index-list span").removeClass('active').eq(n).addClass('active');
}

$(".banner").mouseenter(function(){
	$('.btn-left').css('display','block');
	$('.btn-right').css('display','block');
	clearInterval(timer);

	$(".index-list span").mouseenter(function(){
		controlImage($(this).index());
		controlIcon($(this).index());

		m = $(this).index() + 1;
	})
}).mouseleave(function(){
	timer = setInterval(imagePlay, 3000);
	$('.btn-left').css('display','none');
	$('.btn-right').css('display','none');
})
$('.btn-right').click(function(){
	imagePlay();
})
$('.btn-left').click(function(){
	imageBack();
})

//二级导航定位
$('').each(function(){

})


//nav底部轮播图
var qindex=0;
var index=0;

var ktime=new Date();//获取当前的时间
$('.brand-all-1').hover(function(){
	$('.btn-left1').css('display','block');
	$('.btn-right1').css('display','block');
},function(){
	$('.btn-left1').css('display','none');
	$('.btn-right1').css('display','none');
})


//右切换按钮
$(".brand-all-1 .btn-right1").click(function(){
  var newtime=new Date();
  if(newtime-ktime>500)
  {
   index++;
  if(index>3)
  {
  	index=0;
  	qindex=3;
  }
scrollPlay();
  }

ktime=new Date(); //重新设置时间
});	
//左切换按钮
$(".brand-all-1 .btn-left1").click(function(){
	index--;
	if(index<0)
  {
  	index=3;
  	qindex=0;
  }
	scrollPlay();
});

function scrollPlay(){
	if(index==0 && qindex==3)
	{
		$(".scroll div").eq(qindex).animate({"left":"-1000px"},500);
	 	$(".scroll div").eq(index).css("left","1000px").animate({"left":"0px"},500);
	}else if(index==3 && qindex==0){
		$(".scroll div").eq(qindex).animate({"left":"1000px"},500);
	 	$(".scroll div").eq(index).css("left","-1000px").animate({"left":"0px"},500);
	}
	else if(index>qindex){//左移
	 	$(".scroll div").eq(qindex).animate({"left":"-1000px"},500);
	 	$(".scroll div").eq(index).css("left","1000px").animate({"left":"0px"},500);
	}else if (index<qindex) {//右移
		$(".scroll div").eq(qindex).animate({"left":"1000px"},500);
	 	$(".scroll div").eq(index).css("left","-1000px").animate({"left":"0px"},500);
	}
	 qindex=index;//把当前的值赋值作为下次前一张的序列号
}

//618品牌胜典部分效果
$('.b-box-right ul li').hover(function(){
	$(this).find('div').fadeIn('fast');
},function(){
	$(this).find('div').fadeOut('fast');
})

//一楼层中轮播图的特效
	var qindex2=0;
	var index2=0;
	var clearTime=null;
	var ktime=new Date();//获取当前的时间
	

	$(".but span").hover(function(){
	   clearInterval(clearTime);
        index2=$(this).index();
        scrollPlay2();
         
	},function(){
		autoPlay2();
	});
      //右切换按钮
      $(".brand-all-2 .btn-right2").click(function(){
          var newtime=new Date();
          if(newtime-ktime>300)
          {
           index2++;
          if(index2>3)
          {
          	index2=0;
          	qindex2=3;
          }
        scrollPlay2();
          }
     
        ktime=new Date(); //重新设置时间
         
        
      });	
     //左切换按钮
      $(".brand-all-2 btn-left2").click(function(){
      	index2--;
      	if(index2<0)
          {
          	index2=3;
          	qindex2=0;
          }
      	scrollPlay2();
      });
//当鼠标放到左右切换的按钮上就清除自动播放
      $(".brand-all-2").hover(function(){
           clearInterval(clearTime);
      },function(){
      	autoPlay2();
      });

  //自动播放
      autoPlay2();
      function autoPlay2(){
      	clearTime=setInterval(function(){

      	  index2++;
          if(index2>3)
          {
          	index2=0;
          	qindex2=3;
          }
        scrollPlay2();
      	},2000);
      	
      }

  function scrollPlay2(){
        $(".but span").eq(index2).addClass("hover").siblings().removeClass();
     if(index2==0 && qindex2==5)
     {
     	 $(".floor1 .brand-all-2 .scroll img").eq(qindex2).animate({"left":"-439px"},300);
         $(".floor1 .brand-all-2 .scroll img").eq(index2).css("left","439px").animate({"left":"0px"},300);
     }else if(index2==5 && qindex2==0){
     	 $(".floor1 .brand-all-2 .scroll img").eq(qindex2).animate({"left":"439px"},300);
         $(".floor1 .brand-all-2 .scroll img").eq(index2).css("left","-439px").animate({"left":"0px"},300);
     }
     else if(index2>qindex2){//左移
         $(".floor1 .brand-all-2 .scroll img").eq(qindex2).animate({"left":"-439px"},300);
         $(".floor1 .brand-all-2 .scroll img").eq(index2).css("left","439px").animate({"left":"0px"},300);
     }else if (index2<qindex2) {//右移
         $(".floor1 .brand-all-2 .scroll img").eq(qindex2).animate({"left":"439px"},300);
         $(".floor1 .brand-all-2 .scroll img").eq(index2).css("left","-439px").animate({"left":"0px"},300);
     }
         qindex2=index2;
  }

$('.floor1 .brand-all-2').hover(function(){
	$('.floor1 .btn-left2').css('display','block');
	$('.floor1 .btn-right2').css('display','block');
},function(){
	$('.floor1 .btn-left2').css('display','none');
	$('.floor1 .btn-right2').css('display','none');
})

//二楼轮播图
	var qindex3=0;
	var index3=0;
	var clearTime=null;
	var ktime=new Date();//获取当前的时间
	

	$(".but span").hover(function(){
	   clearInterval(clearTime);
        index3=$(this).index();
        scrollPlay3();
         
	},function(){
		autoPlay3();
	});
      //右切换按钮
      $(".brand-all-3 .btn-right3").click(function(){
          var newtime=new Date();
          if(newtime-ktime>300)
          {
           index3++;
          if(index3>3)
          {
          	index3=0;
          	qindex3=3;
          }
        scrollPlay3();
          }
     
        ktime=new Date(); //重新设置时间
         
        
      });	
     //左切换按钮
      $(".brand-all-3 btn-left3").click(function(){
      	index3--;
      	if(index3<0)
          {
          	index3=3;
          	qindex3=0;
          }
      	scrollPlay3();
      });
//当鼠标放到左右切换的按钮上就清除自动播放
      $(".brand-all-3").hover(function(){
           clearInterval(clearTime);
      },function(){
      	autoPlay3();
      });

  //自动播放
      autoPlay3();
      function autoPlay3(){
      	clearTime=setInterval(function(){

      	  index3++;
          if(index3>3)
          {
          	index3=0;
          	qindex3=3;
          }
        scrollPlay3();
      	},2000);
      	
      }

  function scrollPlay3(){
        $(".but span").eq(index3).addClass("hover").siblings().removeClass();
     if(index3==0 && qindex3==5)
     {
     	 $(".floor2 .brand-all-3 .scroll img").eq(qindex3).animate({"left":"-439px"},300);
         $(".floor2 .brand-all-3 .scroll img").eq(index3).css("left","439px").animate({"left":"0px"},300);
     }else if(index3==5 && qindex3==0){
     	 $(".floor2 .brand-all-3 .scroll img").eq(qindex3).animate({"left":"439px"},300);
         $(".floor2 .brand-all-3 .scroll img").eq(index3).css("left","-439px").animate({"left":"0px"},300);
     }
     else if(index3>qindex3){//左移
         $(".floor2 .brand-all-3 .scroll img").eq(qindex3).animate({"left":"-439px"},300);
         $(".floor2 .brand-all-3 .scroll img").eq(index3).css("left","439px").animate({"left":"0px"},300);
     }else if (index3<qindex3) {//右移
         $(".floor2 .brand-all-3 .scroll img").eq(qindex3).animate({"left":"439px"},300);
         $(".floor2 .brand-all-3 .scroll img").eq(index3).css("left","-439px").animate({"left":"0px"},300);
     }
         qindex3=index3;
  }

$('.floor2 .brand-all-3').hover(function(){
	$('.floor2 .btn-left3').css('display','block');
	$('.floor2 .btn-right3').css('display','block');
},function(){
	$('.floor2 .btn-left3').css('display','none');
	$('.floor2 .btn-right3').css('display','none');
})
//一楼层选项卡
$('.floor1 .options li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$(".floor1 .cards li").finish().fadeOut(100).delay(100).eq($(this).index()).fadeIn(1000)
})
//二楼层选项卡
$('.floor2 .options li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$(".floor2 .cards li").finish().fadeOut(100).delay(100).eq($(this).index()).fadeIn(1000)
})
//热门晒单效果
setInterval(function(){
	$('#list li').last().fadeTo(0,0).hide().prependTo("#list").fadeTo(1000,1);
},3000);