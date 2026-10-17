# Testes de API com Cypress

Projeto de testes automatizados de API para o AgroConecta. Os testes usam Cypress, o plugin `cypress-plugin-api` e Faker para gerar dados de teste.

## Pré-requisitos

- Node.js 20.12 ou superior e npm.
- Acesso autorizado ao ambiente de homologação do AgroConecta.
- Credenciais válidas do AgroConecta para os testes que geram um token.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/victorbarbosa-agro1/curso-cypress-api-victorbarbosa.git
cd curso-cypress-api-victorbarbosa
npm install
```

## Configuração das credenciais

Crie um arquivo `.env` na raiz do projeto copiando o modelo `example.env`. Por exemplo, no PowerShell:

```powershell
Copy-Item example.env .env
```

Preencha o arquivo `.env` com as credenciais de homologação:

```dotenv
AGROCONECTA_USERNAME=seu_usuario
AGROCONECTA_PASSWORD=sua_senha
```

O Cypress carrega esses valores a partir do `.env` e os disponibiliza aos testes como `Cypress.expose("AGROCONECTA_USERNAME")` e `Cypress.expose("AGROCONECTA_PASSWORD")`. O arquivo `.env` é ignorado pelo Git; não compartilhe nem comite credenciais.

## Testes disponíveis

Os testes estão em `cypress/e2e/api`:

- `gerarToken.cy.ts`: verifica a geração de token com credenciais válidas e a resposta para credenciais inválidas.
- `criarUsuario.cy.ts`: verifica a criação de usuário com os campos obrigatórios, a rejeição de nome vazio e a rejeição de token inválido.

Os testes de criação usam a API de homologação e um identificador de tenant configurado em `cypress/support/usuario.ts`. O caso bem-sucedido cria um usuário real no ambiente. Execute-o somente com autorização e considere os efeitos dos dados criados.

## Executar os testes

Para abrir o Cypress e selecionar os testes na interface:

```bash
npx cypress open
```

Para executar todos os testes em modo headless:

```bash
npx cypress run
```

Para executar um arquivo específico:

```bash
npx cypress run --spec "cypress/e2e/api/gerarToken.cy.ts"
npx cypress run --spec "cypress/e2e/api/criarUsuario.cy.ts"
```

## Comandos de suporte

- `cy.gerarTokenAPI(username, password)`, definido em `cypress/support/auth.ts`, envia uma solicitação de token ao serviço de autenticação de homologação.
- `cy.criarUsuarioAPI(token, usuario)`, definido em `cypress/support/usuario.ts`, envia uma solicitação para criar usuário na API de homologação. O objeto `usuario` recebe `nome`, `cargo`, `telefone`, `email`, `status`, `perfil_ids` e `usuario_erp_id`.

Os comandos são carregados por `cypress/support/e2e.ts`, e suas tipagens estão declaradas em `cypress/support/index.d.ts`.
