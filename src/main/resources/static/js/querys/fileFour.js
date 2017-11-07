$(function(){
	$("tr").bind("click",function(){
		redirectTo('api/v1_0/queries/files/'+$(this).data("id"));
		});
	
	$("tr").bind("mouseover",function(){ 
		$(this).css("background-color","#eeeeee"); 
		});
			
	$("tr").bind("mouseout",function(){ 
		$(this).css("background-color","#ffffff"); 
		});
});