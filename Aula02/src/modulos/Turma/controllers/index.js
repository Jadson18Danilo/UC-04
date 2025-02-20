
import { turma } from "../../../config/database.js"
import { TurmaModel } from "../models/index.js";

export class TurmaController {
  criar(cod, nome, sala, capacidade) {
    try {
      const novaTurma = new TurmaModel(cod, nome, sala, capacidade);
      alunos.push(novaTurma);
      console.table(novaTurma);
    } catch (error) {
      console.error("Erro ao tentar criar turma", error.message);
    }
  }

  editar(cod, novoNome, novosala, novacapacidade) {
    try {
      const turma = turma.find((turma) => turma.getcod === cod);
      if (!turma) {
        return console.log("turma não encontrado!");
      }
      turma.nome = novoNome || turma.nome;
      turma.sala = novosala || turma.sala;
      turma.capacidade = novacapacidade || turma.capacidade;
    } catch (error) {
      console.error("Erro ao tentar atualizar a turma", error.message);
    }
  }

  deletarPorcod(cod) {
    try {
      const index = turma.findIndex((turma) => turma.getcod === cod);
      if (index === -1) {
        return console.log("Turma não encontrado");
      }
      turma.splice(index, 1);
      console.log("Turma excluido com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir a turma", error.message);
    }
  }
    deletarTodos() {
    try {
      turma.length = 0;
      console.log("Todos as turmas excluidos!");
    } catch (error) {
      console.error("Erro ao tentar excluir todos as turmas", error.message);
    }
  }

  listaPorcod(cod) {
    try {
      const turma = turmas.find((turma) => turma.getcod === cod);
      if (!turma) {
        return console.log("turma não encontrado");
      }
      console.table(turma);
    } catch (error) {
      console.error("Erro ao tentar exibir o turma", error.message);
    }
  }
  
  listarTodos() {
    try {
      if (turmas.length === 0) {
        return console.log("Não existe turmas a serem exibidos!");
      }
      console.table(turmas);
    } catch (error) {
      console.error("Erro ao tentar exibir os turmas", error.message);
    }
  }
}