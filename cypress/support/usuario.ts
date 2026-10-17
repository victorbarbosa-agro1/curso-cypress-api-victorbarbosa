interface UsuarioAPI {
    nome: string;
    cargo: string;
    telefone: string;
    email: string;
    status: string;
    perfil_ids: string[];
    usuario_erp_id: string;
}

Cypress.Commands.add("criarUsuarioAPI", (token: string, usuario: UsuarioAPI) => {
    cy.api({
        method: 'POST',
        url: 'https://conecta-api-hml.agro1.cloud/api/v1/configuracoes/usuarios',
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": "96120131-a57a-4b74-a767-88c5d421ed0f"
        },
        body: usuario,
        failOnStatusCode: false,
    });
});
