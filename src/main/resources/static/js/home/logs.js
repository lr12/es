
$(function(){
	

	$(document).off('click.page');
	$(document).on('click.page', '#log-pagination a.item.page', function(){
		redirectTo('segments/home/logs?page=' + $(this).data('page'));
	});
	
	$(document).off('click.switch');
	$(document).on('click.switch', '#log-pagination a.item.icon.switch', function(){
		var current = $('#log-pagination a.item.active').data('page');
		if($(this).find('i').is('.left')){
			redirectTo('segments/home/logs?page=' + (current - 1));
			return;
		}
		if($(this).find('i').is('.right')){
			redirectTo('segments/home/logs?page=' + (current + 1));
			return;
		}
	});
	
});