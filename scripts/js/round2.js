$(document).ready(function () {
	// $(".collapse").collapse();
	$(".answer-action").tooltip();
	perform_action();
	thumbs();
	ask();
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
			proceed(action, proceed_panel);
		}

		else if(action=="follow"){
			var follow_panel = $(".panel."+panel);
			follow(action, follow_panel);
		}
	})
}

function burn(action, burnt_panel) {
	burnt_panel.remove();
}

function proceed (action, proceed_panel) {
	var object = proceed_panel.find(".panel-heading");
	object.find("h4");
	console.log(object.find("h4").append("<span class='glyphicon glyphicon-ok pull-right'></span>"));
}

function follow(action, follow_panel, panel) {
  var number = parseInt($(".badge-following").text()) + 1;
  $(".badge-following").html(number);
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

function ask () {
	$(".btn.btn-success.submit").click(function(){
		console.log($(this));
		$(".hidden-info").css("display", "block");
		$(".row.answer").hide();
		$(".panel-collapse.collapse.in").removeClass("in");
		$(".badge-questions").html("6");
	})
}