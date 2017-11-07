/**
 * Created by LuJian on 2016/8/22.
 */

/*
  WARN: for prototype use, should replace with production file  
 */
$(function(){

    $('button.btn-info').popup({
        popup: $('.ui.info.popup'),
        on: 'click',
        position : 'bottom center',
        delay: {
            show: 300,
            hide: 800
        },
        inline: true
    });

    $('.item.login-in').popup({
        popup: $('.ui.login-actions.popup'),
        on: 'click',
        position : 'bottom center',
        delay: {
            show: 0,
            hide: 800
        },
        inline: true
    });


	//¸ßêÏ 16-12-22
   /*  $('.ui.menu .item').tab({
         context : 'parent',
         auto    : true,
         cache   : false,
         path    : 'segments/home'
     });*/

    $('.ui.search').search();

    adjustContentHeight();
    
    $('.navigator a.item.active').trigger('click');
    
    function adjustContentHeight(){
    	var total = $('body').height();
    	var header = $('.login-header').height();
    	var footer = $('.login-footer').height();
    	var nav = 80;
    	$('.navigator .ui.container > .ui.tab.segment').css('height', total - header
    			- nav - footer + 'px');
    }
});

