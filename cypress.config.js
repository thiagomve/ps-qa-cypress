module.exports = {
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://qualidade.apprbs.com.br/certificacao/',
    testIsolation: true, // Desabilita o isolamento de teste para manter o estado entre os testes
  },
};
