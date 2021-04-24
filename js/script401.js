//funcao nomeada
function findBiggestFraction(a, b) {
  console.log('Started Function findBiggestFraction...');
  // a > b ? console.log('a => ' + a) : console.log('b => ' + b);
  var result;
  a > b ? (result = ['FirstFraction', a]) : (result = ['SecondFraction', b]);
  return result;
}

var x = 3 / 4; //variavel GLOBAL -> todos visulizam e podem acessa-la
var y = 5 / 7;
console.log('FirstFraction => ' + x);
console.log('SecondFraction => ' + y);
var maior = findBiggestFraction(x, y);
console.log('O maior valor é ' + maior[0] + ' com valor = ' + maior[1]);

//funcao anonima
var theBiggest = function (a, b) {
  console.log('Started Function theBiggest...');
  var result;
  a > b ? (result = ['FirstArgument', a]) : (result = ['SecondArgument', b]);
  return result;
};
console.log(theBiggest(x, y));

//funcao anonima diretamente invocada
var theBiggest2 = (function (a, b) {
  console.log('Started Function theBiggest2...');
  var result; //variavel LOCAL -> serve apenas para função
  a > b ? (result = ['FirstArgument', a]) : (result = ['SecondArgument', b]);
  return result;
})(x, y);
console.log(theBiggest2);
