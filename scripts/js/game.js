$(document).ready(function () {
	$(".collapse").collapse();
	$(".answer-action").tooltip();
	burn();
	proceed();
	follow();
})

function burn () {
	$(".answer-action").click(function(){
		$(this).attr("disabled", "disabled");
		$(this).css("color", "#444");
	})
}

function proceed () {
	$(".answer-action").click(function(){
		$(this).attr("disabled", "disabled");
		$(this).css("color", "#444");
	})
}

function follow () {
	$(".answer-action").click(function(){
		$(this).attr("disabled", "disabled");
		$(this).css("color", "#444");
	})
}