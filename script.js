// ARRAY (armazenar alunos)
let alunos = [];

// CLASSE (orientação a objeto)
class Aluno {
  constructor(nome, idade, nota) {
    this.nome = nome;
    this.idade = idade;
    this.nota = nota;
  }
}

// FUNÇÃO para adicionar aluno
function adicionarAluno(nome, idade, nota) {
  let aluno = new Aluno(nome, idade, nota);
  alunos.push(aluno);
  atualizarTabela();
}

// FUNÇÃO para atualizar tabela
function atualizarTabela() {
  let tabela = document.getElementById("tabelaAlunos");
  tabela.innerHTML = "";

  for (let i = 0; i < alunos.length; i++) {
    let linha = `
      <tr>
        <td>${alunos[i].nome}</td>
        <td>${alunos[i].idade}</td>
        <td>${alunos[i].nota}</td>
        <td><button onclick="removerAluno(${i})">Remover</button></td>
      </tr>
    `;
    tabela.innerHTML += linha;
  }
}

// FUNÇÃO para remover aluno
function removerAluno(index) {
  alunos.splice(index, 1);
  atualizarTabela();
}

// EVENTO do formulário
document.getElementById("formAluno").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let nota = document.getElementById("nota").value;

  // ESTRUTURA DE CONTROLE
  if (nota < 0 || nota > 10) {
    alert("Nota inválida!");
    return;
  }

  adicionarAluno(nome, idade, nota);

  this.reset();
});