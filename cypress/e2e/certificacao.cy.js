beforeEach(() => {
  cy.visit('https://qualidade.apprbs.com.br/certificacao/')
})

describe('Validação dos botões "Quero me certificar"', () => {

  // beforeEach(() => {
  //   cy.visit('https://qualidade.apprbs.com.br/certificacao/')
  // })

  it('Deve validar existência e redirecionamento dos 3 botões', () => {

    const botoes = ['#ivw5ng', '#i72bga', '#ixy3u1']

    botoes.forEach((botao) => {

      cy.get(botao) // Acessa cada botão conforme os id da variável definida a cima.
        .should('exist') // Valida se o botão existe
        .should('be.visible') // Valida se está visível
        .should('not.be.disabled') // Valida se não está desabilitado
        .should('have.attr', 'href') // Verifica se contém href
        .then((href) => {
          cy.log(`O botão ${botao} redireciona para: ${href}`)
        }) // Exibe o href que está redirecionando

    })
  })

})

describe('Validação do botão "Saiba mais" do Header', () => {
  it('Deve validar a existência e redirecionamento', () => {
    // cy.visit('https://qualidade.apprbs.com.br/certificacao/')
    cy.get('#i7r4lj')
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .should('have.attr', 'href')
      .then((href) => {
        cy.log(`O botão "Saiba mais" redireciona para: ${href}`)
      })
  })
})


