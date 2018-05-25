describe ('Second Test', () => {
  it ('Visit the app', () => {
    cy.visit ('http://localhost:3000/');
  });
});


describe ('Sixth Tests', () => {
  context ('No Todos', () => {
    it ('Adds a new todo', () => {
      cy.visit ('/');
      cy.get ('.new').type ('New todo').type ('{enter}');
    });
  });
});
