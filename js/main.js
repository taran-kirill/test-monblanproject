$(document).ready(function(){


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

	$('.input-remove-date').click(function () {
		$(this).closest('.date').data("DateTimePicker").clear();
	});

	$('#datetimepicker_start .input-remove-date').click(function () {
		$('#datetimepicker_start').data("DateTimePicker").clear();
		$('#datetimepicker_end').data("DateTimePicker").clear();
	});

	var wow = new WOW();
	wow.init();

});