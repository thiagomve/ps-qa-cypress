beforeEach(() => {
  cy.visit('https://qualidade.apprbs.com.br/certificacao/')
})


// Validação dos botões "Quero me certificar"
describe('Validação dos botões "Quero me certificar"', () => {
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


// Validação do botão "Saiba mais" do Header
describe('Validação do botão "Saiba mais" do Header', () => {
  it('Deve validar a existência e redirecionamento do botão', () => {
    cy.get('#i7r4lj')
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .should('have.attr', 'href')
      .then((href) => {
        cy.log(`O botão "Saiba mais" está redirecionando para: ${href}`)
      })
  })
})


// Validação dos botões/ícones de redes sociais
describe('Validação dos botões/ícones de redes sociais', () => {

  const botoes = [
    { id: '#io0o4o', nome: 'facebook', redirect: 'https://www.facebook.com/CanalRubeus' },
    { id: '#il7i3x', nome: 'instagram', redirect: 'https://www.instagram.com/canalrubeus/' },
    { id: '#i2m2tn', nome: 'linkedin', redirect: 'https://www.linkedin.com/company/rubeus/' },
    { id: '#ifpwp7', nome: 'youtube', redirect: 'https://www.youtube.com/rubeus' }
  ]

  botoes.forEach(({ id, nome, redirect }) => {
    it(`Deve validar existência e redirecionamento do ícone/botão ${nome}`, () => {
      cy.get(id)
        .should('exist')
        .should('be.visible')
        .should('not.be.disabled')
        .should('have.attr', 'href')
        .then((href) => {
          cy.log(`O botão ${nome} está redirecionando para: ${href}`)

          if (!href.includes(redirect)) {
            throw new Error(`Redirecionamento incorreto. Esperado: ${redirect} | Atual: ${href}`)
          }
        })
    })
  })

})