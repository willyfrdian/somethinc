//========================= GLOBAL VARIABLE =================================//
import { inputHomePage } from "../../support/page_objects/homepage";

const web = Cypress.env('ALPHA_BASE_URL');

describe('Login', () => {

  beforeEach(function() {
    cy.checkURL(web);
  })

//POSITIVE CASE 1 : Success Register Account Normally
  it('as a user, i can Register Account Normally', () => {
    inputHomePage.inputfirstname();
    inputHomePage.inputlastname();
    inputHomePage.inputEmail();
    inputHomePage.inputphone();
    inputHomePage.inputpassword();
    inputHomePage.inputconfirmpassword();
    inputHomePage.checkboxagreed();
    inputHomePage.registerbutton();
    Cypress.Screenshot.defaults({ capture: 'runner' });
    cy.screenshot('profile');
  })
//END POSITIVE CASE 1 : Success register Normally

})  