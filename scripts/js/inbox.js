var flag = false;
var ticks = $('.tk');

$('#select_all').change(function(evt) {

	if (flag) {
		ticks.each(function() {
			$(this).prop('checked',false);
			flag = false;
		});
	}// end if

	else {
		ticks.each(function() {
			$(this).prop('checked', true);
			flag = true;
		});
	}// end else
});


$('.glyphicon').tooltip()


$(document).ready(function() {
	$('#details').hide();

	$("tr").on("click",function(){
		// $('#content').hide();
		// $('#details').show();
		$('#content').hide('slide', {direction: 'left'}, 1000);
		$('#details').show('slide', {direction: 'right'}, 1000);
		$(".kevin").text("Kevin");
	});

	$('#back').on("click", function() {
		$('#content').show('slide', {direction: 'left'}, 1000);
		$('#details').hide('slide', {direction: 'right'}, 1000);
		$(".kevin").text("Inbox");
	});
});



