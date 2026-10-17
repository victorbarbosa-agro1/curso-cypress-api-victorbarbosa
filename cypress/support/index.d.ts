export {};

declare global {
  namespace Cypress {
    interface Chainable {
      gerarTokenAPI(username: string, password: string): Chainable<any>;
      criarUsuarioAPI(token: string, usuario: {
        nome: string;
        cargo: string;
        telefone: string;
        email: string;
        status: string;
        perfil_ids: string[];
        usuario_erp_id: string;
      }): Chainable<any>;
    }
  }
}