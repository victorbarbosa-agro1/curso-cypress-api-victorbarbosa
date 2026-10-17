describe('Geração de Token', () => {
    it('Deve gerar um token válido', () => {
        cy.gerarTokenAPI(
            Cypress.expose("AGROCONECTA_USERNAME"),
            Cypress.expose("AGROCONECTA_PASSWORD")
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.access_token).to.be.a("string");
        })
    });

    it('Deve dar erro ao passar credenciais inválidas', () => {
        cy.gerarTokenAPI(
            'usuario_invalido',
            'senha_invalida'
        ).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.error_description).to.eq("Invalid user credentials");
        });
    });
});