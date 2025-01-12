const elementSearch = {


    firstName: () => cy.get('[class="form-control input-check form-control-fname"]'),
    lastName: () => cy.get('[class="form-control input-check form-control-lname"]'),
    email: () => cy.get('[class="form-control input-check form-control-email"]'),
    phone: () => cy.get('[class="form-control input-check form-control-phone"]'),
    password: () => cy.get('[class="form-control input-check form-control-pass"]'),
    confirmpassword: () => cy.get('[class="form-control input-check form-control-passc"]'),
    checkboxagreement: () => cy.get('[class="css-label"]').contains('By signing up to Beautyhaul, you have agreed to our'),
    buttonRegister: () => cy.get('[class="btn btn-block btn-primary register-btn"]').contains('Register'),


    emailgenai: () => cy.get('#email'),
    passwordgenai: () => cy.get('#password'),
    login: () => cy.get('.btn'),
    wait: () => cy.wait(15000),
    searchStudio: () => cy.get('.gap-2 > .group > .grow'),
    cardDeployPertamina: () => cy.get('[class="truncate"]').contains('[DEPLOY] Pertamina - Chat with Data'),
    textQuestion: () => cy.get('.rc-textarea', { timeout: 15000 }),
}

export default elementSearch;