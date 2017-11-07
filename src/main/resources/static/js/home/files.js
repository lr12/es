
$(function(){
	$(document).on('click', '#btn-file-upload', function(){
		$('#modal-file-upload').modal('show');
	});
	
	$(document).on('click', '.edit_file', function(){
		$('#modal-file-edit').modal('show');
	});
	$(document).on('click', '.view_relative', function(){
		$('#modal-viewrelative').modal('show');
	});	 
});