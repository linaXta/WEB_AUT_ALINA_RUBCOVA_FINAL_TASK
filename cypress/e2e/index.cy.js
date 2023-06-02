import FormPage from "../pageObjects/FormPage";

describe('Automation-practice-form scenarios', () => {

  context('Student Registration Form', () => {
        
    beforeEach(() => {
      FormPage.visit();
    });
      
    it('Input all the necessary information', () => {
      FormPage.inputFirstName('Kaspars');
      FormPage.inputLastName('Berzins');
      FormPage.inputEmail('berzins@example.com');
      FormPage.selectGender('Male');
      FormPage.inputMobileNumber('1234567890');
      FormPage.selectDateOfBirth('28');
      FormPage.setSubjects('Economics');
      FormPage.setHobbies('Music');
      FormPage.uploadPicture.selectFile('cypress/e2e/files/image.jpg');
      FormPage.clickSubmitButton(); 

      cy.wait(1000); // Gaidīt 1 sekundi, lai ielādētos rezultāti

      FormPage.getFirstNameValue().should('have.value', 'Kaspars');
      FormPage.getLastNameValue().should('have.value', 'Berzins');
      FormPage.getEmailValue().should('have.value', 'berzins@example.com');
      FormPage.getGenderValue().should('have.value', 'Male');
      FormPage.getMobileNumberValue().should('have.value', '1234567890');
      FormPage.getDateOfBirthValue().should('have.value', '28 Feb 1930');

      cy.get('td').contains('Economics');

      cy.get('td').contains('Music');
    });
   
  });
    
});
