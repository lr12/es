

$(function(){
	$('#adv-sear-accord')
	    .accordion({
	        selector: {
	            trigger: '.title'
	        }
	    });

	$('.ui.item.advanced-search').on('click', function(){
	   $('#adv-sear-accord .title').trigger('click');
	});
});