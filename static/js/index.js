/**
 * Created by pky on 2016/11/18.
 */

    $(function(){
        /*����ҳ�Ľ��밴ť*/
        $('.goto h1').click(function(){
            $('.loading').stop().animate({'left':'100%'});
            $('.zuishuai').stop().animate({'top':'-100%'});
            $('.mian').stop().show();
            $('.myinfo2').stop().animate({'right':'25%'});
            $('.myinfo').stop().animate({'left':'25%'});
            $('.myinfo3').stop().animate({'top':'55%'});
        });/*����ҳ�Ľ��밴ť*/
        /*header�˵�ҳ�Ĺ�����ʼ*/
        var num=25;
        $('.header ul li').hover(function(){
            var $index = $(this).index();
            var width = num * $index;
            $('.underline').stop().animate({'left':+width+'%'});
        },function(){
            $('.underline').stop().animate({'left':'-25%'});
        }); /*header�˵�ҳ�Ĺ�������*/
    })
    window.onload = function(){
        $('.zuishuai').stop().animate({'top':'25%'},1000);/*������������תħ��*/
        setTimeout(function(){
            $('.loading,.zuishuai').stop().animate({'left':'100%'});
            $('.mian').stop().show();
        },20000);/*����ҳ��ͣ���¼�*/
    }
