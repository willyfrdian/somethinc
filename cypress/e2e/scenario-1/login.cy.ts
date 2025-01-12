//========================= GLOBAL VARIABLE =================================//
import { inputHomePage } from "../../support/page_objects/homepage";

const web = Cypress.env('ALPHA_BASE_URL');

describe('Login', () => {

  beforeEach(function() {
    cy.checkURL(web);
  })

//POSITIVE CASE 1 : Success login input username and password
it('as a user, i can login input username and password', () => {
    inputHomePage.inputEmailgenai();
    inputHomePage.inputPasswordgenai();
    inputHomePage.loginButton();
    inputHomePage.searchModule();
    inputHomePage.cardDEPLOY();
    inputHomePage.writeQuestion1();
    inputHomePage.waitResult();
    Cypress.Screenshot.defaults({ capture: 'runner' });
    cy.screenshot('profile');
  })
//END POSITIVE CASE 1 : Success register Normally

})  