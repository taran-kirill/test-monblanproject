$(document).ready(function(){

	// $('.remove-date').click(function () {
	// 	$('#datetimepicker').data("DateTimePicker").clear();
	// });

	$("#datetimepicker_start").datetimepicker({
		format: 'DD.MM.YYYY',
	});
	$("#datetimepicker_end").datetimepicker({
		format: 'DD.MM.YYYY',
		useCurrent: false
	});
	$("#datetimepicker_start").on("dp.change", function (e) {
		$('#datetimepicker_end').data("DateTimePicker").minDate(e.date);
	});
	$("#datetimepicker_end").on("dp.change", function (e) {
		$('#datetimepicker_start').data("DateTimePicker").maxDate(e.date);
	});
});