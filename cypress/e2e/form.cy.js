beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao/')
})

// Validação do formulário

describe('Validações do formulário', () => {
    it('Deve enviar o formulário com dados válidos', () => {
        cy.get('[name="pessoa.nome"]').type('Thigo Nome Teste')
        cy.get('[name="pessoa.telefonePrincipal"]').type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]').type('thigo@teste.com')

        cy.intercept('PATCH', 'https://qualidade.apprbs.com.br/api/v2/sendData').as('envioForm')
        cy.get('#rbBtnNext').click()
        cy.wait('@envioForm').then((interception) => {

            const status = interception.response.statusCode

            cy.log(`Status retornado pela API: ${status}`)

            // expect(status, 'Status da requisição do formulário').to.eq(200)
            if (status !== 200) {
                cy.log('Formulário não foi enviado com sucesso')
                throw new Error(`Falha no envio do formulário. Status retornado: ${status}`);
            } else {
                cy.log('Formulário enviado com sucesso')
            }
        })
    })

    it('Não deve enviar o formulário com todos os campos vazios', () => {

        cy.get('[name="pessoa.nome"]').should('have.value', '')
        cy.get('[name="pessoa.telefonePrincipal"]').should('have.value', '')
        cy.get('[name="pessoa.emailPrincipal"]').should('have.value', '')

        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
            .log('O botão "Avançar" está desabilitado quando os campos estão vazios')
    })

    it('Deve validar se o campo "Nome" não aceita valores numéricos', () => {

        cy.get('[name="pessoa.nome"]')
            .type('123456')
            .should('have.value', '123456')
        cy.get('[name="pessoa.telefonePrincipal"]')
            .type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]')
            .type('thigo@teste.com')
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })

    it('Deve validar se o campo "Telefone" não aceita letras', () => {

        cy.get('[name="pessoa.nome"]')
            .type('Thigo Nome Teste')
        cy.get('[name="pessoa.telefonePrincipal"]')
            .type('abcdefghijt')
        cy.get('[name="pessoa.emailPrincipal"]')
            .type('thigo@teste.com')
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })

    it('Deve validar se o campo "Email" não aceita valores inválidos', () => {

        cy.get('[name="pessoa.nome"]')
            .type('Thigo Nome Teste')
        cy.get('[name="pessoa.telefonePrincipal"]')
            .type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]')
            .type('thigo@teste') // Email sem domínio
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })

    it('Deve validar obrigatoriedade do campo "Nome"', () => {
        cy.get('[name="pessoa.nome"]').should('have.value', '')
        cy.get('[name="pessoa.telefonePrincipal"]').type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]').type('thigo@teste.com')
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })

    it('Deve validar obrigatoriedade do campo "Telefone"', () => {
        cy.get('[name="pessoa.nome"]').type('Thigo Nome Teste')
        cy.get('[name="pessoa.telefonePrincipal"]').should('have.value', '')
        cy.get('[name="pessoa.emailPrincipal"]').type('thigo@teste.com')
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })

        it('Deve validar obrigatoriedade do campo "Email"', () => {
        cy.get('[name="pessoa.nome"]').type('Thigo Nome Teste')
        cy.get('[name="pessoa.telefonePrincipal"]').type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]').should('have.value', '')
        cy.get('#rbBtnNext')
            .should('have.attr', 'disabled') // Verifica se o botão está desabilitado
    })
})