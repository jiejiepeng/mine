/**
 * Created by pky on 2016/11/18.
 */

    $(function(){
        /*引导页的进入按钮*/
        $('.goto h1').click(function(){
            $('.loading').stop().animate({'left':'100%'});
            $('.zuishuai').stop().animate({'top':'-100%'});
            $('.mian').stop().show();
            $('.myinfo2').stop().animate({'right':'25%'});
            $('.myinfo').stop().animate({'left':'25%'});
            $('.myinfo3').stop().animate({'top':'55%'});
        });/*引导页的进入按钮*/
        /*header菜单页的滚条开始*/
        var num=25;
        $('.header ul li').hover(function(){
            var $index = $(this).index();
            var width = num * $index;
            $('.underline').stop().animate({'left':+width+'%'});
        },function(){
            $('.underline').stop().animate({'left':'-25%'});
        }); /*header菜单页的滚条结束*/
    })
    window.onload = function(){
        $('.zuishuai').stop().animate({'top':'25%'},1000);/*加载完跳下旋转魔方*/
        setTimeout(function(){
            $('.loading,.zuishuai').stop().animate({'left':'100%'});
            $('.mian').stop().show();
        },20000);/*加载页面停留事件*/
    }
