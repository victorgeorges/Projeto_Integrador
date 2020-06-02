$(document).ready(function() {
	$('.mascaraData').mask('99/99/9999');
	$('.mascaraTelefone').mask('(99) 99999-9999');
	$('.mascaraCep').mask('99999-999');
	$('.mascaraCpf').mask('999.999.999-99');

	$('.validaData').change(function(){
		var value = $(this).val();
		console.log(value);
		console.log(value.length);
		if(value.length < 10) {
			alert('O campo de data deve ter 10 caracteres');
		}
	});

	$('.mascaraDinheiroReal').priceFormat({
		prefix: 'R$ ',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});

	$('.mascaraDinheiroDolar').priceFormat({
		prefix: 'US$ '
	});
});