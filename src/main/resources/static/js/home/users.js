$(function(){
	$('#users-fn-tabs .item').tab();
	
	$(document).on('click', 'btn-exchange', function(){
		console.log("123");
		$('#modal-user-modify').modal('show');
	});
	
	$(document).on('click', '.btn-user-add', function(){
		$('#modal-user-add').modal('show');
	});
	
	
	/*$(document).on('click', '.btn-role-add', function(){
		$('#modal-role-add').modal('show');
	});
	$(document).on('click', '.btn-edit', function(){
		$('#modal-role-edit').modal('show');
	});*/
	
});