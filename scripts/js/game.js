$(document).ready(function () {
	ask();
})

function ask () {
	$(".btn.btn-success.submit").click(function(){
		console.log($(this));
		$(".hidden-info").css("display", "block");
		$(".row.answer").hide();
		$(".badge-questions").html("2");
	})
}