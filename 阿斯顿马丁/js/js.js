 var W=document.documentElement.offsetWidth;
 var H=document.documentElement.clientHeight;
 var easing=document.getElementById('easing');
 var section1=document.getElementById('section1');
 var section2=document.getElementById('section2');
 var section3=document.getElementById('section3');
 var section4=document.getElementById('section4');
 var list=document.getElementById('list').getElementsByTagName('li');
 var list_1=document.querySelectorAll('.bg');
 var list_L=document.getElementById('list_1')
 easing.style.height=H+"px";
 var num=0;
 for(var i=0;i<list_1.length;i++){
    list_1[i].style.height=H+"px";
 }
 for(var i=0;i<list.length;i++){
    list[i].className="";
    this.className="active";
 }
 var scrollFunc = function (e) {
        var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时   
               
                gotoTop();
                 // for(var i=0;i<list_1.length;i++){
                 //        list_1[i].style.top=Top+"px";
                 //     }
                    
                // console.log(Top);
                // num-=0.5;     
                // if(num<0){
                //     num=0;
                // }
                // number=Math.floor(num);
                // for(var i=0;i<list_1.length;i++){
                //     list_1[i].className="";
                //       console.log(number);
                //     list_1[number].className="active";
                //     // list_1[number].style.top="-643px";
                //     if(number!=0&&number!=3){
                //         list_1[number-1].className="cunont";
                //     }
                //  } 
                //  for(var j=0;j<list.length;j++){
                //     list[j].className="";
                //     list[number].className="active";
                //  } 
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                gotoDown();      
            } 
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                gotoTop();
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                gotoDown();
            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
    for(var j=0;j<list.length;j++){
            list[j].onmouseover=function(){
                this.className="active";
                for(var j=0;j<list.length;j++){
                    list[j].index=j;
                    if(j==this.index){
                        list[j].className="active";
                        list_1[j].className="active";
                       
                    }else{
                         list[j].className="";
                         list_1[j].className="";
                    }  
                }
            }
            list[j].onmouseout=function(){
                this.className='active';
            }
            list[j].className="";
        }
        function gotoTop(){
            //获取滚动条滚动的距离
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            console.log(top);
            num-=0.5;     
                if(num<0){
                    num=0;
                }
                number=Math.floor(num);
                for(var i=0;i<list_1.length;i++){
                    list_1[i].className="";
                      console.log(number);
                    list_1[number].className="active";
                 } 
                 for(var j=0;j<list.length;j++){
                    list[j].className="";
                    list[number].className="active";
                 }
            window.scrollBy(0, -160);
            }
        function gotoDown(){
            var down = document.body.scrollTop || document.documentElement.scrollTop;
            //获取滚动条滚动的距离
            num+=0.5;
                if(num>3){
                    num=3;
                } 
                number=Math.floor(num);
            down++;
            for(var i=0;i<list.length;i++){
                 list[number].className="active";
                 list[i].className="";
            }
            for(var i=0;i<list_1.length;i++){
                    list_1[i].className="";
                    console.log(number);
                    list_1[number].className="active";
                 }
            window.scrollBy(0, 160);
        }
        //二维码
        var Qr=document.getElementById('Qr');
        var Qrli=document.getElementById("Qrli");
        Qrli.onmouseover=function(){
            Qr.style.display="block";
        }
        Qrli.onmouseout=function(){
            Qr.style.display="none";
        }
        //轮播
        var ing_ul=document.getElementById("banner_list");  
        var images=document.getElementById("banner_list").getElementsByTagName('img');      
        var head_banner=document.getElementById("head_banner");
        var left=head_banner.scrollLeft;
        var L=0;
        var n=0;
        var num=0;
        for(var i=0;i<images.length;i++){
            images[i].style.width=W;
            images[i].style.height=H;
        }
        function trunRight(){
            n+=1;
            var R=L;
            var mytime=setInterval(function(){  
                R-=2;
                banner_list.style.left=R+'px';
                L=R;
                if(n>5){
                        R=0;
                        n=1;
                }
            num=n
                if(R==n*(-W)){
                    clearInterval(mytime);
                    return;
                }
            },1);
            return;
    }
    function trunLeft(){
        n-=1;
        var R=L;
            var mytime=setInterval(function(){  
                R+=2;              
                L=R;
                console.log(n);
                if(n<0){
                R=5*(-W);
                n=4;
                return;
                }
                banner_list.style.left=R+'px';      
                if(R==n*(-W)){                
                    clearInterval(mytime);
                    return;
            }
            },1);
            return;
    }
// 隐藏菜单
var header_car = document.getElementById('header_car');
var header_all=document.getElementById('header_all');
header_car.style.width=W;
    header_all.onmouseover=function(){
        header_car.style.display="block";
    }
    header_all.onmouseout=function(){
        header_car.style.display="none";
    }
// 第二页
var video_ulst=document.getElementById("video-list");
var video_list=video_ulst.getElementsByTagName('li');
function video_Left(){
        for(var i=0;i<video_list.length;i++){
            if(video_list[i].className=="active"){
                j=i;
                video_list[i].className="";   
            }         
        }
        console.log((j)%6);
        if(j==0){
            j=5;
        }
        video_list[(j-1)%6].className="active";
        video_list[j%6].className="next1";
        video_list[(j+1)%6].className="next2";
        video_list[(j+2)%6].className="next3";
    }
    function video_Right(){
        for(var i=0;i<video_list.length;i++){
            if(video_list[i].className=="active"){
                j=i;
                video_list[i].className="";   
            }         
        }
        console.log((j)%6);
        video_list[(j+1)%6].className="active";
        video_list[(j+2)%6].className="next1";
        video_list[(j+3)%6].className="next2";
        video_list[(j+4)%6].className="next3";
    }
  // $('.video-list-box .btns .btn_left1').click(function(){
  //                   var videos = $('.video-list-box ul.video-list > li');
  //                   var i = $('.video-list-box ul.video-list > li.active').index();
  //                   videos.removeClass('active next1 next2 next3').eq((i - 1) % videos.length).addClass('active')
  //                   videos.eq(i % videos.length).addClass('next1');
  //                   videos.eq((i + 1) % videos.length).addClass('next2');
  //                   videos.eq((i + 2) % videos.length).addClass('next3');
  //               });
  //               $('.video-list-box .btns .btn_right1').click(function(){
  //                   var videos = $('.video-list-box ul.video-list > li');
  //                   var i = $('.video-list-box ul.video-list > li.active').index();
  //                   videos.removeClass('active next1 next2 next3').eq((i + 1) % videos.length).addClass('active')
  //                   videos.eq((i + 2) % videos.length).addClass('next1');
  //                   videos.eq((i + 3) % videos.length).addClass('next2');
  //                   videos.eq((i + 4) % videos.length).addClass('next3');
  //               });

// 第四页
// 如果第四页显示的时候，在让text出现
var text=document.getElementById('text');
var s_title=document.getElementById('s-title');
section4.onmouseover=function(){
    text.className="active";
    s_title.className="active";
}
section4.onmouseout=function(){
    text.className="text";
    s_title.className="s-title";
}
// 第三页轮播
var tab_ulst=document.getElementById('tablist');
var tab_banner=document.getElementById('tab_banner');
function tabtrunRight(){
    // 点击时让scrollLft++
    // tab_banner.scrollLeft=tabLeft+"px";
    var mytime=setInterval(function(){
            tab_banner.scrollLeft++;
            if(tab_banner.scrollLeft==1050){
                clearInterval(mytime);
            }else if(tab_banner.scrollLeft==2103){
                clearInterval(mytime);
                return;
            }
    },1); 
    return; 
}
function tabtrunLeft(){
    // 点击时让scrollLft++
    // tab_banner.scrollLeft=tabLeft+"px";
    var mytime=setInterval(function(){
            tab_banner.scrollLeft--;
            if(tab_banner.scrollLeft==0){
                clearInterval(mytime);
                return;
            }else if(tab_banner.scrollLeft==1050){
                clearInterval(mytime);
            }
    },1);  
    return;
}
