import prompt from "prompt-sync";
import { TurmaController } from "../controllers/index";

const turmaController = new TurmaController();
const input = prompt();

export class TurmaView {

  listarTurma() {
    console.log("\nLista de alunos:");
    turmaController.listarTodos();
  }

  criarTurma() {
    const cod = input("Digite a matrícula: ");
    const nome = input("Digite o nome: ");
    const sala = input("Digite o número da sala: ");
    const capacidade = input("Digite a capacidade: ");
    turmaController.criar(cod, nome, sala, capacidade);
  }

  editarTurma() {
    const codEditar = input("Digite a matrícula do turma: ");
    const novoNome =
      input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novaSala =
      input("Nova sala (deixe em branco para manter o mesmo): ") || null;
    const novaCapacidade =
      input("Nova senha (deixe em branco para manter a mesma): ") || null;
    turmaController.editar(codEditar, novoNome, novaSala, novaCapacidade);
  }

  excluirCod() {
    const codDeletar = input(
      "Digite o código do turma a ser deletado: "
    );
    turmaController.deletarPorcod(codDeletar);
  }
  excluirTodos() {
    turmaController.deletarTodos();
  }
}