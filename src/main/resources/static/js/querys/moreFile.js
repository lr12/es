$(function(){
    $('.ui.icon.large.button.find').click(function(event){
		
		//alert($(this).data("id")+"===");
		//alert('api/v1_0/queries/files/'+$(this).data("id"));
		redirectTo('api/v1_0/queries/files/'+$(this).data("id"));
	});
	
	$('.ui.button.back.btn-back').click(function(){
		redirectTo('segments/home/index');
	});
});