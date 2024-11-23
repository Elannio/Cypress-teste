describe('Testa o scroll da página', () => {
    it('Verifica o comportamento do scroll', () => {

      cy.visit('https://example.com');

      cy.wait(2000);

      cy.window().scrollTo('bottom'); 
      
      cy.window().scrollTo('top'); 
    });
  });
  