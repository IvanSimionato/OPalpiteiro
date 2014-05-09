$(document).ready(function() {

	$('#btnChutar').click(function(){

		var resultadoUm = Math.round(Math.random()*10);
		var resultadoDois = Math.round(Math.random()*10);



		$('#palpiteTimeA').val(resultadoUm);
		$('#palpiteTimeA').trigger('change');
		$('#palpiteTimeB').val(resultadoDois);
		$('#palpiteTimeB').trigger('change');

	});

    $('#palpiteTimeA').on('change', function() {
        $('#lbPalpiteTimeA').html(this.value)
    });
    $('#palpiteTimeB').on('change', function() {
        $('#lbPalpiteTimeB').html(this.value)
    });
});