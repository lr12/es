$(function(){
	$('.ui.button.back.btn-back').click(function(){
		redirectTo('segments/home/index');
	});
	
	
	$('.ui.button.find').click(function(event){
		//alert($(this).data("id"));
		//alert($(this).data("type")+"===");
		//alert("获取的内容是："+$td.text());
		//redirectTo('');
	});
});