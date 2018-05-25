describe ('Third Test', () => {
  it ('Focus on the input', () => {
    cy.visit ('/');
    cy.focused ().should ('have.class', 'new task');
  });
});

describe ('Third Test', () => {
  it ('Accepts input', () => {
    const text = 'New Todo';
    cy.visit ('/');
    cy.get ('.new').type (text).should ('have.value', text);
  });
});
