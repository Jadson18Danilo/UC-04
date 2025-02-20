import { AlunoView } from './modulos/Aluno/views/index'; 
import { TurmaView } from './modulos/Turma/views';

const aluno = new AlunoView()
const turma = new TurmaView()

import promptSync from 'prompt-sync';
const prompt = promptSync(); 


const aluno1 = new AlunoController();

function exibirOp() {
    console.log("\n===== Opções =====");
    console.log("1 - Modulo turma");
    console.log("2 - Modulo aluno");
    console.log("3 - Modulo professor");
    console.log("0 - Modulo professor");
    console.log("\n==================");
}

let controleOp;

do {
    exibirOp();
    controleOp = parseInt(prompt("Digite uma numeração de 0 a 5: "), 10);

    switch (controleOp) {
        case 1:
            
            break;

        case 2:
            
            break;

        case 3:
            
            break;

        case 0:
            
            break;

        default:
            console.log("Opção inválida! Digite um número de 0 a 3.");
            break;
    }

} while (controleOp !== 0);


function exibirMenu() {
    console.log("\n============ MENU ============");
    console.log("1 - Criar novo aluno");
    console.log("2 - Listar todos alunos");
    console.log("3 - Editar aluno por matrícula");
    console.log("4 - Excluir todos alunos");
    console.log("5 - Excluir aluno por matrícula");
    console.log("0 - Sair");
    console.log("\n==============================");
}

let controle;

do {
    exibirMenu();
    controle = parseInt(prompt("Digite uma numeração de 0 a 5: "), 10);

    switch (controle) {
        case 1:
            
            break;

        case 2:
            
            break;

        case 3:
            
            break;

        case 4:
            
            break;

        case 5:
            
            break;

        case 0:
            
            break;

        default:
            console.log("Opção inválida! Digite um número de 0 a 5.");
            break;
    }

} while (controle !== 0);


aluno1.criar("a9111","Irineu","ireneu@edum.senac.br","@123")
aluno1.criar("a9222","Borges","borges@edum.senac.br","@123")

aluno1.listarTodos()

aluno1.deletarPorMatricula("a9111")
aluno1.listarTodos()

aluno1.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno1.listarTodos()
