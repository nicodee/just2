$(document).ready(function () {
	// $(".collapse").collapse();
	$(".answer-action").tooltip();
	perform_action();
	thumbs();
})

function perform_action() {
	$(".answer-action").click(function(){
		$(this).attr("disabled", "disabled");
		$(this).css("color", "#444");
		var action = $(this).attr("data-original-title").toLowerCase();
		var panel = $(this).attr("data-panel");
		

		if(action=="burn"){
			var burnt_panel = $(".panel."+panel);
			console.log(burnt_panel.attr("class"));
			burn(action, burnt_panel);
		}

		else if(action=="proceed"){
			var proceed_panel = $(".panel."+panel);
			console.log(proceed_panel.attr("class"));
		}

		else if(action=="follow"){
			var follow_panel = $(".panel."+panel);
			console.log(follow_panel.attr("class"));
		}
	})
}

function burn(action, burnt_panel) {
	burnt_panel.remove();
}

function proceed () {

}

function follow () {

}

function thumbs() {
	$(".glyphicon-thumbs-up").click(
		function(){
			if( $(this).hasClass("color-red") ) {
				$(this).removeClass("color-red");
			}
			else{
				$(this).addClass("color-red");
			}
	});
	$(".glyphicon-thumbs-down").click(
		function(){
			if( $(this).hasClass("color-red") ) {
				$(this).removeClass("color-red");
			}
			else{
				$(this).addClass("color-red");
			}
	});
}