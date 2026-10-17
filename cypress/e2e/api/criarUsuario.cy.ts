import { faker } from '@faker-js/faker';

describe('Criação de Usuários', () => {
    let token: string;

    before(() => {
        cy.gerarTokenAPI(
            Cypress.expose("AGROCONECTA_USERNAME"),
            Cypress.expose("AGROCONECTA_PASSWORD")
        ).then((response) => {
            token = response.body.access_token;
        });
    });

    it('Criar um usuário com campos obrigatórios', () => {
        cy.criarUsuarioAPI(token, {
            nome: faker.person.fullName(),
            cargo: "Qualidade",
            telefone: "(11) 19112-2121",
            email: faker.internet.email(),
            status: "active",
            perfil_ids: [],
            usuario_erp_id: "",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property("id");
            expect(response.body.data).to.have.property("nome");
        });
    });

    it('Não deve criar um usuário sem o nome', () => {
        cy.criarUsuarioAPI(token, {
            nome: "",
            cargo: "Qualidade",
            telefone: "(11) 19112-2121",
            email: faker.internet.email(),
            status: "active",
            perfil_ids: [],
            usuario_erp_id: "",
        }).then((response) => {
            expect(response.status).to.be.oneOf([400, 422]);
        });
    });

    it('Não deve criar um usuário com token inválido', () => {
        cy.criarUsuarioAPI("token_invalido", {
            nome: faker.person.fullName(),
            cargo: "Qualidade",
            telefone: "(11) 19112-2121",
            email: faker.internet.email(),
            status: "active",
            perfil_ids: [],
            usuario_erp_id: "",
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });
});
