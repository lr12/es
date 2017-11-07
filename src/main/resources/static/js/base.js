
// template helper

//custom jquery plugin
$.fn.toJson = function(){
	
	var result = {};
	var $ele = $(this);
	
	$ele.find('input,select').each(function(i, input){
		var $input = $(input);
		if($input.attr("disabled") || $input.attr('readonly')){
			return;
		}
		result[$input.attr('name')] = $input.val();
	});
	
	return result;
}

//custom system message
var $message = $('#system-message');

function guid() {
    var counter = 0;

    return function( prefix ) {
        var guid = (+new Date()).toString( 32 ),
            i = 0;

        for ( ; i < 5; i++ ) {
            guid += Math.floor( Math.random() * 65535 ).toString( 32 );
        }

        return (prefix || '_') + guid + (counter++).toString( 32 );
    };
}

function Message(className, header, content){
	this.message = $message.clone();
	this.message.attr('id', guid()('sys-msg'));
	this.message.attr('class', className);
	this.message.find('div.header').html(header);
	this.message.find('p').html(content);
	this.message.css({
		position: 'fixed',
		top: '5%',
		right: '30%',
		left: '30%',
		display: 'none'
	});
	$('body').append(this.message);
	return this.message;
}

function messageTransition($msg){
	$msg.transition('slide up', '1s')
	.transition('slide down', '0.5s', function(){
		$msg.remove();
	});
}

function info(header, msg){
	messageTransition(new Message('ui message info', header, msg));
}

function success(header, msg){
	messageTransition(new Message('ui message positive', header, msg));
}

function error(msg){
	messageTransition(new Message('ui message negative', header, msg));
}

function warn(msg){
	messageTransition(new Message('ui message warning', header, msg));
}


function redirectTo(url, cb){
	return $.ajax({
		type: 'get',
		url: url,
		headers: {"X-Remote": true},
		success: function(html){
			$('.navigator .ui.tab.segment.active').html(html);
			if(cb){
				cb(html);
			}
		}
	});
}

function modifyNav(activeItem){
	
    $("#nav a").each(function(i ,e){
		if($(e).attr("data-tab")==activeItem){
			$(e).attr("class","item active");
		}
	});
}
