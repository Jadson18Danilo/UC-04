import  {AlunoController}  from './modulos/Aluno/controllers/index.js'
import prompt from 'prompt-sync'

const aluno1 = new AlunoController()

function exibir() {
    console.log("1 - Criar novo aluno")
    console.log("2 - Lista todos alunos")
    console.log("3 - Editar aluno por matricula")
    console.log("4 - Excluir todos alunos")
    console.log("5 - Excluir por matricula")
    console.log("0 - Sair")
}

const controle = parseInt(prompt("Digite uma numeração de 0 a 5: "))

do {
 exibirMenu()
 switch (controle) {
    case 1:
        
        break;
 
    default:
        break;
 }
} while (controle !== 0)


aluno1.criar("a9111","Irineu","ireneu@edum.senac.br","@123")
aluno1.criar("a9222","Borges","borges@edum.senac.br","@123")

aluno1.listarTodos()

aluno1.deletarPorMatricula("a9111")
aluno1.listarTodos()

aluno1.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno1.listarTodos()
