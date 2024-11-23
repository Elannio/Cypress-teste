describe('Testa o scroll da página', () => {
  it('Verifica o comportamento do scroll', () => {

    cy.visit('https://example.com');
    
    cy.wait(2000);

    cy.window().then((win) => {
      win.scrollTo(0, 1000); 
    });

    cy.window().then((win) => {
      win.scrollTo(0, 0); 
    });
  });
});
