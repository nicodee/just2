$(document).ready(function () {
	// $(".collapse").collapse();
	$(".answer-action").tooltip();
	perform_action();
})

function perform_action() {
	$(".answer-action").click(function(){
		$(this).attr("disabled", "disabled");
		$(this).css("color", "#444");
		var action = $(this).attr("data-original-title").toLowerCase();

		if(action=="burn"){
			var panel = $(this).attr("data-panel");
			var burnt_panel = $(".panel"+panel);
			console.log(burnt_panel.attr("class"));
		}

		else if(action=="proceed"){
			console.log($(this).attr("data-panel"));
		}

		else if(action=="follow"){
			console.log($(this).attr("data-panel"));
		}
	})
}


function proceed () {

}

function follow () {

}