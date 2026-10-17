Cypress.Commands.add("gerarTokenAPI", (username: string, password: string) => {
    cy.api({
        method:'POST',
        url: 'https://auth-hml.agro1.cloud/realms/agroconecta/protocol/openid-connect/token',
        form: true,
        body: {
            grant_type: 'password',
            client_id: 'agroconecta-client',
            username: username,
            password: password
        },
        failOnStatusCode: false
    })  
})
