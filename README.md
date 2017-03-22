# RD Evaluate and Hide form fields
#### Sometimes is necessary add some information on lead without make them select the options or be able to change them. For this i made this simple library:

# How use:

On RD Station landing page editor goes to Advanced Settings (Edição Avançada) and add the script on **"JavaScript on HEAD"**, changing the values of `"TITULO AQUI"` and `"VALOR AQUI"` variables to your RD Station variable title and the value of your choice.

>Example:

`if(jQuery(this).text() == "Área de atuação*"){`

`jQuery(this).siblings('input').val('Pequenos Animais');`

