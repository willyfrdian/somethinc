// exportnya spesifik
import { elementSearch } from "./element";

const element = {


  inputEmail : () => {
    elementSearch.email().type('cekpointesting+' + userID_Numeric() + '@gmail.com')      
    function userID_Numeric() {
    var text = "";
    var possible = "1234567890";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    }
  },


  inputfirstname : () => {
    elementSearch.firstName().type('Ferdi');
  },

  inputlastname : () => {
    elementSearch.lastName().type('Dian');
  },

  inputpassword : () => {
    elementSearch.password().type('Qwerty123!');
  },

  inputconfirmpassword : () => {
    elementSearch.confirmpassword().type('Qwerty123!');
  },

  inputphone : () => {
    elementSearch.phone().type('87777605020');
  },

  checkboxagreed : () => {
    elementSearch.checkboxagreement().click();
  },

  registerbutton : () => {
    elementSearch.buttonRegister().click();
  },

  waitResult : () => {
    elementSearch.wait()
  },







  inputEmailgenai : () => {
    elementSearch.emailgenai().type('superadmin@admin.com');
  },

  inputPasswordgenai : () => {
    elementSearch.passwordgenai().type('0I764W8n');
  },

  loginButton : () => {
    elementSearch.login().click();
  },

  searchModule : () => {
    elementSearch.searchStudio().type('Pertamina {esc}');
  },

  cardDEPLOY : () => {
    elementSearch.cardDeployPertamina().click();
  },

  writeQuestion1 : () => {
    elementSearch.textQuestion().type('Berapa jumlah kumulatif produksi minyak dan jumlah kumulatif LPO pada YTD 2024{enter}')
  },


}
export const inputHomePage = element