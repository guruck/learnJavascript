console.log('========= Objetos ==========');
var curso = new Object();
var curso = {
  titulo: 'JavaScript: Formação Básica',
  aluno: 'Jonas',
  nivel: 1,
  dataDeFormacao: false,
  numeroDeTestes: 0,
  atualizaNumeroDeTestes: function () {
    return ++curso.numeroDeTestes;
  },
};
curso.atualizaNumeroDeTestes();
console.log(curso);

// prettier-ignore
function Curso(titulo,aluno,nivel,dataDeFormacao,numeroDeTestes,atualizaNumeroDeTestes) {
  this.titulo = titulo,
  this.aluno = aluno,
  this.nivel = nivel,
  this.dataDeFormacao = dataDeFormacao,
  this.numeroDeTestes = numeroDeTestes,
  this.atualizaNumeroDeTestes = function () {
    return ++curso.numeroDeTestes;
  };
}

var cursos = [
  new Curso('JavaScript: Formação Básica', 'Marta', 1, false),
  new Curso('JavaScript: Formação Media', 'Katerine', 2, true, 854132),
];
console.log(cursos[0]);
console.log(cursos[1]);
