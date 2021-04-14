describe("Yet Another Todo List", function() {
  beforeEach(function() {
    cy.visit('/')
  })
  it("shows a heading", function() {
    cy.contains("Yet Another Todo List!")
  })

  it("saves a todo and displays it on the page", function() {
    cy.get('#todo-textbox').type("my first task!")
    cy.get('#todo-save-button').click()

    cy.contains("my first task!")
  })

  it("save multiple todos and display them on the page", function() {
    cy.get('#todo-textbox').type("my first task!")
    cy.get('#todo-save-button').click()

    cy.get('#todo-textbox').clear()

    cy.get('#todo-textbox').type("my second task!")
    cy.get('#todo-save-button').click()

    cy.contains("my first task!")
    cy.contains("my second task!")
  })

  it("shows each todo with a checkbox when clicked toggles strikethrough", function() {
    cy.get('#todo-textbox').type("my first task!")
    cy.get('#todo-save-button').click()
    cy.get('#todo-textbox').clear()
    cy.get('#todo-0-text')

    cy.get('#todo-0-text').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
    cy.get('#todo-0-checkbox').click()
    cy.get('#todo-0-text').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
  })

  it("clears all todos", function() {
    cy.get('#todo-textbox').type("my first task!")
    cy.get('#todo-save-button').click()
    cy.get('#todo-clear').click()
    cy.get('#todo-0-text').should('not.exist')
  })
})
