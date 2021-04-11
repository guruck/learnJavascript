//o script JS é lido assim que é encontrado na pagina.
conteudoScript001 = document.getElementById('conteudoScript001');
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth();
var ano = dataAtual.getFullYear();
conteudoScript001.innerHTML =
  '<h2>Hoje é ' + dia + '/' + mes + '/' + ano + ' </h2>';
