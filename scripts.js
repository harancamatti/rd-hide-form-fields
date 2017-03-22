function completeFields(){
	//Encontra todos os nomes de campos do formulário
	jQuery('label').each(function(){
		//Inicio codigo campo | Copiar esse if para mais campos
		//Encontra o campo com o título "TITULO AQUI""
		if(jQuery(this).text() == "TITULO AQUI"){
			//Esconde o campo e a label
			jQuery(this).parent().hide();
			//Define o valor para o campo "VALOR AQUI"
			jQuery(this).siblings('input').val('VALOR AQUI');
		}
	});
}
jQuery('form').ready(completeFields())