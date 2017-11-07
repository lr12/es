//# sourceURL=standards.js
$(function(){
	

	
	$('#ds-year-accord')
		.accordion({
			selector: {
				trigger: '.title.ui'
			}
		});
	
	$(document).on('click', '.button.btn-ds-add', function(){
        $('.ui.modal.ds-add').modal('show');
    });
	$(document).on('click', '.button.btn-ds-import', function(){
        $('.ui.modal.ds-import').modal('show');
    });
	$(document).on('click', '.button.btn-ds-edit', function(){
        $('.ui.modal.ds-edit').modal('show');
    });
	
	
	$(document).on('click', '.button.tree_add', function(){
        $('.ui.modal.tree_add').modal('show');
    });
	
	$(document).on('click', '.button.tree_edit', function(){
        $('.ui.modal.tree_edit').modal('show');
    });
	
	$(document).on('click', '.button.item_add', function(){
        $('.ui.modal.item_add').modal('show');
    });
	
	$(document).on('click', '.button.item_edit', function(){
        $('.ui.modal.item_edit').modal('show');
    });
	
	$(document).on('click', '.button.sjx_add', function(){
        $('.ui.modal.sjx_add').modal('show');
    });
	
	$(document).on('click', '.button.sjx_edit', function(){
        $('.ui.modal.sjx_edit').modal('show');
    });
	
	
	
	
	$(document).on('click', '#btn-compress', function(){
        compressSidebar($(this));
    });

    $(document).on('click', '#btn-expand', function(){
        expandSidebar($(this));
    });
    
   
    
	
	
	

 
    
    function compressSidebar($ele){
        $('#ds-detail-content')
            .removeClass('twelve')
            .removeClass('wide')
            .addClass('fifteen')
            .addClass('wide');
        $('#ds-year-list')
            .removeClass('four')
            .removeClass('wide')
            .addClass('one')
            .addClass('wide');
        $('#ds-year-list .title.ui, #ds-year-list .content').hide();
        $ele.parent().hide();
        $('#btn-expand').show();
    }

    function expandSidebar(){
        $('#ds-detail-content')
            .removeClass('fifteen')
            .removeClass('wide')
            .addClass('twelve')
            .addClass('wide');
        $('#ds-year-list')
            .removeClass('one')
            .removeClass('wide')
            .addClass('four')
            .addClass('wide');
        $('#ds-year-list .title.ui').show();
        $('#btn-compress').parent().show();
        $('#btn-expand').hide();
    }
    
	

	
});